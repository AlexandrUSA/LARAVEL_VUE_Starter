<template>
  <div class="main-layout">
    <navbar/>

    <div <!-- class="container mt-4" -->>
      <child/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>

<style>
  .main-layout {
    width: 100vw;
    height: 100%;
  }

</style>
