<template>
<form @submit.prevent="register" @keydown="form.onKeydown($event)">
          <!-- Name -->
          <div class="form-group row">
            <label class="col-form-label text-md-right">{{ $t('name') }}</label>
            <input v-model="form.name" type="text" name="name" class="form-control"
              :class="{ 'is-invalid': form.errors.has('name') }">
            <has-error :form="form" field="name"/>
          </div>

          <!-- Email -->
          <div class="form-group row">
            <label class="col-form-label text-md-right">{{ $t('email') }}</label>
            <input v-model="form.email" type="email" name="email" class="form-control"
              :class="{ 'is-invalid': form.errors.has('email') }">
            <has-error :form="form" field="email"/>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-form-label text-md-right">{{ $t('password') }}</label>
            <input v-model="form.password" type="password" name="password" class="form-control"
              :class="{ 'is-invalid': form.errors.has('password') }">
            <has-error :form="form" field="password"/>
          </div>

          <!-- Password Confirmation -->
          <div class="form-group row">
            <label class="col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control"
              :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
            <has-error :form="form" field="password_confirmation"/>
          </div>

          <v-btn :loading="form.busy" 
                  color="blue darken-3" 
                  block 
                  type="submit">
                {{ $t('register') }}
          </v-btn>
        </form>
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
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token }} = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
