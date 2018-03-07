<template>
	<div>
  <card :title="$t('home')">
    {{ $t('you_are_logged_in') }}
  </card>
  <v-card height="200px">
    <v-bottom-nav
      absolute
      shift
      :value="true"
      :active.sync="e2"
      :color="color"
    >
      <v-btn dark>
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn dark>
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</div>
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
