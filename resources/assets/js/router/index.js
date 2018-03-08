import Vue from 'vue'
import store from '~/store'
import Meta from 'vue-meta'
import routes from './routes'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'

Vue.use(Meta)
Vue.use(Router)

// Глобальные посредники, срабатывающие при переходе на любые страницы
const globalMiddleware = ['locale', 'check-auth']

// Динамическая загрузка посредников
const routeMiddleware = resolveMiddleware(
  require.context('~/middleware', false, /.*\.js$/)
)

const router = createRouter()

sync(store, router) // Синхронизируем роутер с хранилищем

export default router

/**
 * Создаем роутер.
 *
 * @return {Router}
 */
function createRouter () {
  const router = new Router({
    scrollBehavior,
    mode: 'history',
    routes
  })

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)

  return router
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach (to, from, next) {
  // Получаем озможные асинхронные компоненты и хуки и разрешаем их.
  const components = await resolveComponents(
    router.getMatchedComponents({ ...to })
  )
  // Если их нет, то разрешаем загрузку
  if (components.length === 0) return next();

  // Стартуем наш загрузочный бар (если он имееттся в комп-те).
  if (components[components.length - 1].loading !== false) {
    router.app.$nextTick(() => router.app.$loading.start())
  }

  // Получаем посредников для всех найденных компонентов.
  const middleware = getMiddleware(components)

  // Вызываем каждого посредника.
  callMiddleware(middleware, to, from, (...args) => {
    // Загружаем разметку ТОЛЬКО если "next()" был вызван без аргументов
    if (args.length === 0) {
      router.app.setLayout(components[0].layout || '')
    }

    next(...args)
  })
}

/**
 * Глобальный хук завершения зарузки компонента.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function afterEach (to, from, next) {
  await router.app.$nextTick()  // Ждем прорисовки ДОМа

  router.app.$loading.finish()  // Сигнализируем об окончании загрузки
}

/**
 * Вызываем каждого посредника для компонента.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function callMiddleware (middleware, to, from, next) {
  const stack = middleware.reverse()  // массив посредников

  const _next = (...args) => {
    // Завершаем загрузку если "_next" были переданы арг-ты или стек пустой.
    if (args.length || !stack.length) {
      if (args.length) router.app.$loading.finish();
      
      return next(...args);
    }

    const middleware = stack.pop()  // Поочереди вытаскиваем посредника

    if (typeof middleware === 'function') { // Если он -функция - выполняем ее
      middleware(to, from, _next)
    } else if (routeMiddleware[middleware]) { // Если нет, ищем его в папке middleware
      routeMiddleware[middleware](to, from, _next)  // и выполняем
    } else {
      throw Error(`Посредника [${middleware}] не существует!`)  // Если не нашли - ругаемся
    }
  }

  _next() // Продолжаем поход по посредникам
}

/**
 * Работаем с асинхронными компонентами.
 *
 * @param  {Array} components
 * @return {Array}
 */
async function resolveComponents (components) {
  return await Promise.all(components.map(async component => {
    return typeof component === 'function' ? await component() : component
  }))
}

/**
 * Обьединяем глобальные посредники с посредниками компонента.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware (components) {
  const middleware = [...globalMiddleware]

  components.filter(c => c.middleware).forEach(component => {
    if (Array.isArray(component.middleware)) {
      middleware.push(...component.middleware)
    } else {
      middleware.push(component.middleware)
    }
  })

  return middleware
}

/**
 * Сохраняем позицию скролла при навигации
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) return savedPosition;

  if (to.hash) return { selector: to.hash };

  const [component] = router.getMatchedComponents({ ...to }).slice(-1)

  if (component && component.scrollToTop === false)  return {};

  return { x: 0, y: 0 }
}

/**
  Работаем с посредником
 * @param  {Object} requireContext
 * @return {Object}
 */
function resolveMiddleware (requireContext) {
  return requireContext.keys()
    .map(file =>
      [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
    )
    .reduce((guards, [name, guard]) => (
      { ...guards, [name]: guard.default }
    ), {})
}
