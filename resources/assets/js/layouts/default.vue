<template>
  <v-app>
    <navbar/>
    <div class="content-wrapper">
      <child/>
    </div>
  </v-app>
</template>

<script>
import Navbar from '~/components/navbar/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>

<style>
/*  .content-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }*/
/*  .content {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: calc(100vh - 56px);
  }*/

</style>
