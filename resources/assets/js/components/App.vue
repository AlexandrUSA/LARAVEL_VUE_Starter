<template>
  <div id="app" data-app="true">
    <loading ref="loading"/>
    <transition name="page" mode="out-in">
      <component v-if="layout" :is="layout"></component>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'

// Динамическая загрузка компонентов разметки.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },
  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {
    /**
     * Установка разметки приложения.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) layout = this.defaultLayout;
      this.layout = layouts[layout]
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  html {
    overflow-y: auto;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .toolbar__content {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .btn__content {
    height: auto !important;
  }
  .menuable__content__active {
    background-color: #fff;
  }

input[type=email],
input[type=text],
input[type=number] {
  border-bottom: 1px solid #BBDEFB;
  -moz-appearance: textfield;
}
</style>
