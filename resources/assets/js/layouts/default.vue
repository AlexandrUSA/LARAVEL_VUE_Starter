<template>
  <v-app :dark="theme">
    <!-- Шапка -->
    <navbar/>
    <!-- Основной контент -->
    <div class="content-wrapper">
      <child/>
    </div>
    <!-- Футер -->
    <v-footer fixed="true" app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
    </v-footer>
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
