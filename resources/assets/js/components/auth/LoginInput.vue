<template>
  <v-form v-model="valid" 
          @submit.prevent="login" 
          @keydown="form.onKeydown($event)">
    <has-error :form="form" field="email"/>
    <v-text-field
      :label="$t('email')"
      v-model="form.email"
      :rules="emailRules"
      prepend-icon="email"
      type="email"
      required
    ></v-text-field>
    
    <has-error :form="form" field="password" />
    <v-text-field
      :label="$t('password')"
      v-model="form.password"
      :rules="passwordRules"
      prepend-icon="vpn_key"
      type="password"
      required
    ></v-text-field>
    
    <v-checkbox
      :label="$t('remember_me')"
      v-model="remember"
      name="remember"
    ></v-checkbox>
    <v-btn block large type="submit" 
           :loading="form.busy">
         {{ $t('login') }}
    </v-btn>
    <v-btn flat small
           :to="{ name: 'password.request' }">
      {{ $t('forgot_password') }}
    </v-btn>
  </v-form>         
</template>

<script>
import Form from 'vform'
import LoginWithGithub from '~/components/auth/LoginWithGithub'

export default {
  middleware: 'guest',

  components: {
    LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: '',
    }),
    valid: false,
    emailRules: [
      v => !!v || "Введите значение"
    ],
    passwordRules: [
      v => !!v || "Введите значение"
    ],
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="scss">



</style>