<template>
  <v-form @submit.prevent="login" @keydown="form.onKeydown($event)">

    <label for="Email">{{ $t('email') }}</label>
    <input id="Email" type="email" name="email" 
           v-model="form.email"
           :class="{ 'is-invalid': form.errors.has('email') }">
    <has-error :form="form" field="email"/>
    <div class="form-group">
      <label for="Password">{{ $t('password') }}</label>
      <input id="Password" type="password"
             v-model="form.password" 
             :class="{ 'is-invalid': form.errors.has('password') }">
      <has-error :form="form" field="password"/>
    </div>
    <v-btn large block type="submit" 
          :loading="form.busy"
          color="teal lighten-4">
    {{ $t('login') }}
    </v-btn>
    <v-btn flat small
           :to="{ name: 'password.request' }">
      {{ $t('forgot_password') }}
    </v-btn>
    <!-- <div class="form-group">
      <label for="Email">{{ $t('email') }}</label>
      <input v-model="form.email" type="email" name="email" class="form-control"  aria-describedby="emailHelp" 
            :placeholder="$t('email')"
            :class="{ 'is-invalid': form.errors.has('email') }">
      <has-error :form="form" field="email"/>
    </div>
    <div class="form-group">
      <label for="Password">{{ $t('password') }}</label>
      <input type="password" id="Password" class="form-control" 
             v-model="form.password" 
             :class="{ 'is-invalid': form.errors.has('password') }">
      <has-error :form="form" field="password"/>
    </div>
    <v-checkbox
      :label="$t('remember_me')"
      v-model="remember"
      name="remember"
      color="blue darken-3"
    ></v-checkbox>
    <v-btn color="blue darken-3" block type="submit" :loading="form.busy">{{ $t('login') }}</v-btn>
    <v-btn flat small
           :to="{ name: 'password.request' }">
      {{ $t('forgot_password') }}
    </v-btn> -->
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
  .btn--block {
    color: #fff !important;
  }

  form{
  padding: 20px 0;
  position: relative;
  z-index: 2;
  
  input{
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, .4);
    background-color: rgba(255, 255, 255, .2);
    width: 250px;
    
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;
    
    color: white;
    
    transition-duration: 0.25s;
    font-weight: 300;
    
    &:hover{
      background-color: rgba(255, 255, 255, 0.4);
    }
    
    &:focus{
      background-color: white;
      width: 300px;
      
      color: #53e3a6;
    }
  }
}


</style>