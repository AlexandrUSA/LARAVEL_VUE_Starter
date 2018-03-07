<template>
  <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
  </card>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
  	return {
  		e2: 3
  	}
  	
  },
  computed: {
      color () {
        switch (this.e2) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
      }
    }
  },
  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>
