import store from '~/store'

const Home = () => import('~/pages/home').then(m => m.default || m)
const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const PasswordRequest = () => import('~/pages/auth/password/email').then(m => m.default || m)

const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const AdminDashboard = () => import('~/pages/admin/Dashboard').then(m => m.default || m)
const AdminEmployees = () => import('~/pages/admin/employees/List').then(m => m.default || m)
const AdminEmployee = () => import('~/pages/admin/employees/Show').then(m => m.default || m)
const AdminEmployeeEdit = () => import('~/pages/admin/employees/Editor').then(m => m.default || m)

export default [
  { 
    path: '/', 
    name: 'welcome', 
    redirect: {name: 'home'}
  },

  { 
    path: '/login', 
    name: 'login', 
    component: Login 
  },
  { 
    path: '/register', 
    name: 'register', 
    component: Register 
  },
  { 
    path: '/password/reset', 
    name: 'password.request', 
    component: PasswordRequest 
  },
  { 
    path: '/password/reset/:token', 
    name: 'password.reset', 
    component: PasswordReset 
  },
  { 
    path: '/home', 
    name: 'home', 
    component: Home 
  },
  { 
    path: '/settings', 
    component: Settings, 
    children: [
      { 
        path: '', 
        redirect: { 
          name: 'settings.profile' 
        }
      },
      { 
        path: 'profile', 
        name: 'settings.profile', 
        component: SettingsProfile 
      },
      { 
        path: 'password', 
        name: 'settings.password', 
        component: SettingsPassword 
      }
    ] 
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: AdminDashboard,
    children: [
      {
        path: 'employees',
        name: 'employees',
        component: AdminEmployees,
        beforeEnter(from, to, next){
          store.dispatch('AdminEmployees/load');
          next();
        }
      },
      {
        path: 'employees/:id',
        name: 'employee',
        component: AdminEmployee,
        props: true
      },
      {
        path: 'employees/:id/edit',
        name: 'employeeEdit',
        component: AdminEmployeeEdit,
        props: true
      },
      {
        path: 'employees/create',
        name: 'employeeCreate',
        component: AdminEmployeeEdit
      }
    ]
  },
  { 
    path: '*', 
    component: require('~/pages/errors/404.vue') 
  }
]
