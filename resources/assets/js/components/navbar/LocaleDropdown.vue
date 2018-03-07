<template>
  <div id="locale">
    <v-menu :nudge-width="100">
      <v-btn 
        flat 
        color="white"
        slot="activator"
      >
        <span :class="[textColor]">{{ locales[locale] }}</span>
        <fa 
          pull="right" 
          :class="[iconColor]" 
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
  #locale .white--text {
    text-transform: none;
  }
</style>
