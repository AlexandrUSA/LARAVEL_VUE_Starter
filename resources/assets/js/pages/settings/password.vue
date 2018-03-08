<template>
    <v-form v-model="valid" @submit.prevent="update" @keydown="form.onKeydown($event)">
    <v-text-field
      :label="$t('new_password')"
      v-model="form.password"
      :rules="passwordRules"
      :counter="160"
      prepend-icon="vpn_key"
      type="password"
      required
    ></v-text-field>
    <has-error :form="form" field="password"/>
    <v-text-field
      :label="$t('confirm_password')"
      v-model="form.password_confirmation"
      :rules="passwordRules"
      :counter="160"
      prepend-icon="vpn_key"
      type="password"
      required
    ></v-text-field>
    <has-error :form="form" field="password_confirmation" />

    <v-btn large block :loading="form.busy" type="submit">{{ $t('update') }}</v-btn>
  </v-form>
</template>

<script>
import Form from 'vform'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    valid: false,
    form: new Form({
      password: '',
      password_confirmation: ''
    }),
    passwordRules: [
      v => !!v || "Введите значение"
    ],
  }),

  methods: {
    async update () {
      await this.form.patch('/api/settings/password')

      this.form.reset()
    }
  }
}
</script>
