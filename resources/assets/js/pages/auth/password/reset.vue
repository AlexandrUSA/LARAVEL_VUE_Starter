<template>
  <v-form v-model="valid" @submit.prevent="reset" @keydown="form.onKeydown($event)">
    <v-text-field
      :label="$t('email')"
      v-model="form.email"
      prepend-icon="email"
      name="email"
      type="email"
      required
    ></v-text-field>
    <has-error :form="form" field="email"/>
    <v-text-field
      :label="$t('confirm_password')"
      v-model="form.password"
      prepend-icon="vpn_key"
      type="password"
      name="password"
      required
    ></v-text-field>
    <has-error :form="form" field="password"/>

    <v-text-field
      :label="$t('confirm_password')"
      v-model="form.password_confirmation"
      prepend-icon="vpn_key"
      type="password"
      required
    ></v-text-field>
    <has-error :form="form" field="password_confirmation" />

    <v-btn large block :loading="form.busy" type="submit">{{ $t('reset_password') }}</v-btn>
  </v-form>

  <!-- <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('reset_password')">
        <form @submit.prevent="reset" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status"/>

     
                <div class="form-group row">
                  <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
                  <div class="col-md-7">
                    <input v-model="form.email" type="email" name="email" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('email') }" readonly>
                    <has-error :form="form" field="email"/>
                  </div>
                </div>

          
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password" type="password" name="password" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password') }">
              <has-error :form="form" field="password"/>
            </div>
          </div>

          
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control"
                :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
              <has-error :form="form" field="password_confirmation"/>
            </div>
          </div>

          
          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <v-button :loading="form.busy">
                {{ $t('reset_password') }}
              </v-button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div> -->
</template>

<script>
import Form from 'vform'

export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },

  methods: {
    async reset () {
      const { data } = await this.form.post('/api/password/reset')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
