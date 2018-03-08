<template>
  <v-toolbar>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <router-link :to="{ name: user ? 'home' : 'welcome' }">
        {{ appName }}
      </router-link>
      <locale-dropdown/>
      <v-spacer></v-spacer>
        <!--  Пользователь -->
        <template v-if="user">
          <settings-dropdown></settings-dropdown>
        </template>     
        <!-- Гость -->
        <template v-else>
          <v-btn flat :to="{ name: 'login' }">{{ $t('login') }}</v-btn>
          <v-btn flat :to="{ name: 'register' }">{{ $t('register') }}</v-btn>
        </template>   
    </v-toolbar>    
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'
import SettingsDropdown from './SettingsDropdown'

export default {
  data: () => ({
    appName: window.config.appName,
    items: [
        'All', 'Family', 'Friends', 'Coworkers'
      ],
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  components: {
    LocaleDropdown,
    'settings-dropdown': SettingsDropdown
  },

  methods: {
    async logout () {
      // Выйти из учетной записи
      await this.$store.dispatch('auth/logout')
      // Перенаправление на сттраницу авторизации
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

.list {
  background-color: #fff;
}
</style>
