<template>
  <v-app :dark="theme">
    <navbar/>
    <div class="content-wrapper">
      <child/>
    </div>
  </v-app>
</template>

<script>
import Navbar from '~/components/navbar/Navbar'
import { mapGetters } from 'vuex';
export default {
  name: 'MainLayout',
  computed: {
    ...mapGetters({
      'theme': 'theme/dark'
    })
  },
  components: {
    Navbar
  }
}
</script>
