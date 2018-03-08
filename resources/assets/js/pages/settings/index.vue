<template>
  <div class = "user-settings">
    <v-navigation-drawer stateless permanent floating value="true">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="user.photo_url">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ user.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="tab in tabs" :key="tab.id" :to="{ name: tab.route }">
          <v-list-tile-action>
            <v-icon>{{ tab.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ tab.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    <div id="theme-switcher">
      <v-switch
        :label="'Темная тема'"
        v-model="dark"
      ></v-switch>
    </div> 
    </v-navigation-drawer>
    <div class="settings__content card">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>    

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  middleware: 'auth',
  data () {
    return {
      dark: null,
      right: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
      theme: 'theme/dark'
    }),
    tabs () {
      return [
        {
          id: 0,
          icon: 'person',
          name: this.$t('profile'),
          route: 'settings.profile'
        },
        {
          id: 1,
          icon: 'lock',
          name: this.$t('password'),
          route: 'settings.password'
        }
      ]
    },
    image() {
      return (this.user) ? this.user.photo_url : false;
    }
  },
  created() {
    this.dark = this.theme;
  },
  watch: {
    dark() {
      this.switchTheme(this.dark)
    }
  },
  methods: {
    ...mapActions({
      switchTheme: 'theme/switchTheme'
    })
  }
}
</script>

<style scoped>
.settings-card .card-body {
  padding: 0;
}

.settings__content {
  display: inline-block;
  width: 70%;
  max-width: 890px;
  margin: 20px 0 0 40px;
}

.navigation-drawer {
  display: inline-block;
  vertical-align: top;
  margin-top: 20px !important;
  padding-bottom: 0;
}

.input-group--selection-controls {
  padding: 0 16px;
}

.card {
  padding: 30px;
}

.user-settings {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
}
</style>
