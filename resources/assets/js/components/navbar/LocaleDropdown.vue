<template>
  <div id="locale">
    <v-menu :nudge-width="100">
      <v-btn 
        flat 
        slot="activator"
      >
        <span>{{ locales[locale] }}</span>
        <fa 
          pull="right" 
          icon="caret-down" 
        />
        </v-btn>
        <v-list>
          <v-list-tile 
            v-for="(value, key) in locales" 
            :key="key" 
            @click="setLocale(key)"
          >
            <v-list-tile-title v-text="value"/>
          </v-list-tile>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),
  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>

<style>
  #locale .btn__content {
    text-transform: none;
  }
</style>
