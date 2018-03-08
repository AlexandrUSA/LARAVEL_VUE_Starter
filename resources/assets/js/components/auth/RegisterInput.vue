<template>
  <v-form v-model="valid" @submit.prevent="register" @keydown="form.onKeydown($event)">

    <!-- Имя пользователя -->
    <has-error :form="form" field="name"/>
    <v-text-field
      :label="$t('name')"
      v-model="form.name"
      :rules="nameRules"
      :counter="70"
      prepend-icon="person"
      required
    ></v-text-field>

    <!-- Емаил -->
    <has-error :form="form" field="email" />
    <v-text-field
      :label="$t('email')"
      v-model="form.email"
      :rules="emailRules"
      :counter="70"
      prepend-icon="email"
      required
    ></v-text-field>

    <!-- Пароль -->
    <has-error :form="form" field="password"/>
    <v-text-field
      :label="$t('password')"
      v-model="form.password"
      :rules="passwordRules"
      prepend-icon="vpn_key"
      type="password"
      :counter="160"
      required
    ></v-text-field>

    <!-- Подтверждение пароля -->
    <has-error :form="form" field="password_confirmation" />
    <v-text-field
      :label="$t('confirm_password')"
      v-model="form.password_confirmation"
      :rules="passwordRules"
      prepend-icon="vpn_key"
      type="password"
      :counter="160"
      required
    ></v-text-field>

    <!-- Отправка формы -->
    <v-btn large block :loading="form.busy" type="submit">{{ $t('register') }}</v-btn>
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
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }),
    valid: false,
    nameRules: [
      v => !!v || "Введите значение",
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || "Введите значение",
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || "Введите значение"
    ]
  }),

  methods: {
    async register () {
      // Регистрация пользователя.
      const { data } = await this.form.post('/api/register')

       // Вход пользователя.
      const { data: { token }} = await this.form.post('/api/login')

       // Сохранить токен.
      this.$store.dispatch('auth/saveToken', { token })

       // Обновление пользователя.
      await this.$store.dispatch('auth/updateUser', { user: data })

       // Перенаправление на домашнюю.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
