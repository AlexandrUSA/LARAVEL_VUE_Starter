<template>
  <v-toolbar app>
      <v-toolbar-side-icon @click="switchDrawer()"></v-toolbar-side-icon>
      <v-btn fab small @click="historyBack()">
        <v-icon>chevron_left</v-icon>
      </v-btn> 
      <v-btn fab small @click="historyBack()">
        <v-icon>chevron_right</v-icon>
      </v-btn>      
      <v-btn flat :to="{ name: user ? 'home' : 'welcome' }">{{ appName }}</v-btn>
      <locale-dropdown/>
      <v-spacer></v-spacer>
        <!--  Пользователь -->
        <template v-if="user">
          <settings-dropdown></settings-dropdown>
        </template>     
        <!-- Гость -->
        <template v-else>
          <v-btn flat :to="{ name: 'login' }">{{ $t('login') }}</v-btn>
        </template>   
    </v-toolbar>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    SettingsDropdown
  },
  methods: {
    async logout () {
      // Выйти из учетной записи
      await this.$store.dispatch('auth/logout')
      // Перенаправление на сттраницу авторизации
      this.$router.push({ name: 'login' })
    },
    historyBack() {
      this.$router.go(-1);
    },
    historyForward() {
      this.$router.go(1);
    },
      ...mapActions({
      switchDrawer: 'theme/switchDrawer'
    })
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
