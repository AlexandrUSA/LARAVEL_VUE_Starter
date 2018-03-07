<template>
  <div id="locale">
    <v-menu :nudge-width="100">
      <v-btn 
        flat 
        color="white"
        slot="activator"
      >
        <img :src="user.photo_url" class="profile-avatar">
        <span :class="[textColor]">{{ user.name }}</span>
        <fa 
          pull="right" 
          :class="[iconColor]" 
          icon="caret-down" 
        />
        </v-btn>
        <v-list>
          <v-list-tile :to="{ name: 'settings.profile' }">
            <v-list-tile-avatar>
              <fa icon="cog" fixed-width/>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="$t('settings')"/>
          </v-list-tile>
          <v-list-tile @click.prevent="logout">
            <v-list-tile-avatar>
              <fa icon="sign-out-alt" fixed-width/>
            </v-list-tile-avatar>
            <v-list-tile-title v-text="$t('logout')"/>
          </v-list-tile>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  props: {
    textColor: {
      type: String,
      default: 'white--text'
    },
    iconColor: {
      type: String,
      default: 'info--text'
    }
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
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

.profile-avatar {
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: -.375rem 4px;
}
</style>
