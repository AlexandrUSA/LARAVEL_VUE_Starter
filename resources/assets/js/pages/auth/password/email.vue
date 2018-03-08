<template>
  <v-card>
    <v-card-title primary-title>
      <h2>
        {{ $t('reset_password') }}
      </h2>
    </v-card-title>
    <v-form @submit.prevent="send" @keydown="form.onKeydown($event)">
      <v-text-field
        :label="$t('email')"
        v-model="form.email"
        prepend-icon="email"
        required
      ></v-text-field>
      <has-error :form="form" field="email" />
      <v-btn large block :loading="form.busy" type="submit">
        {{ $t('send_password_reset_link') }}
      </v-btn>
    </v-form>
  </v-card>
  

<!--   <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('reset_password')">
        <form @submit.prevent="send" @keydown="form.onKeydown($event)">
          <alert-success :form="form" :message="status"/>


          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" type="email" name="email" class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }">
              <has-error :form="form" field="email"/>
            </div>
          </div>


          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <v-button :loading="form.busy">
                {{ $t('send_password_reset_link') }}
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
      email: ''
    })
  }),

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
  }
</style>