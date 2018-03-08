<template>
	<div class="employee__create">
        <v-card>
          <v-card-title>
            <h2>{{title}} <v-icon class="title__icon">{{titleIcon}}</v-icon></h2>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
					    <v-text-field
					      label="Имя"
					      v-model="item.first_name"
					      :rules="nameRules"
					      :counter="30"
					      required
					    ></v-text-field>
					    <v-text-field
					      label="Фамилия"
					      v-model="item.last_name"
					      :rules="nameRules"
					      :counter="30"
					      required
					    ></v-text-field>
					    <v-text-field
					      label="Отчество"
					      v-model="item.patronymic"
					      :rules="nameRules"
					      :counter="30"
					    ></v-text-field>
						  <v-select
					      label="Должность"
					      v-model="item.position"
					      prepend-icon="card_travel"
					      :items="positions"
					      :rules="[v => !!v || 'Выберите должность']"
					      required
					    ></v-select>
						  <v-text-field
					      label="Заработная плата"
					      v-model="item.salary"
					      prepend-icon="attach_money"
					      required
					    ></v-text-field>
					    <v-text-field
					      label="Адрес"
					      v-model="item.address"
					      prepend-icon="home"
					      required
					    ></v-text-field>
							<v-layout row wrap>
						    <v-flex xs12>
						      <v-menu
						        ref="menu"
						        lazy
						        :close-on-content-click="false"
						        v-model="menu"
						        transition="scale-transition"
						        offset-y
						        full-width
						        :nudge-right="40"
						        min-width="290px"
						        :return-value.sync="date"
						      >
						        <v-text-field
						          slot="activator"
						          label="День рождения"
						          v-model="item.birthday"
						          prepend-icon="event"
						          readonly
						        ></v-text-field>
						        <v-date-picker v-model="item.birthday" no-title scrollable>
						          <v-spacer></v-spacer>
						          <v-btn flat color="primary" @click="menu = false">Отмена</v-btn>
						          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
						        </v-date-picker>
						      </v-menu>
						    </v-flex>
						  </v-layout>
					    <v-text-field
					      label="Номер телефона"
					      v-model="item.phone_number"
					      prepend-icon="phone_iphone"
					      required
					    ></v-text-field>
					    <v-btn outline color="info" @click.native="save" :disabled="!valid">Сохранить</v-btn>
            	<v-btn outline color="error" @click.native="close">Отмена</v-btn> 
					  </v-form>
          </v-card-text>
        </v-card>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	export default {
		props: {
			employee: {
				type: Object
			},
			id: {
				default: null
			}
		},
		data() {
			return {
				date: null,
	      menu: false,
	      modal: false,
	      name: '',
	      item: {},
	      valid: false,
	      nameRules: [
	        v => !!v || 'Введите значение',
	        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',
	      ],
	      emailRules: [
	        v => !!v || 'Введите E-mail',
	        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
	      ],
	      positions: [
	        'Старший сотрудник',
	        'Бухгалтер',
	        'Директор',
	        'Сотрудник'
	      ],
			}
		},
		computed: {
			title() {
				return (this.id) ? 'Hовый сотрудник' : 'Изменить сотрудника';
			},
			titleIcon() {
				return (this.id) ? 'person_add' : 'person';
			}
		},
		created() {
			if(this.employee) this.item = this.employee;
		},
		methods: {
			...mapActions({
				changeItem: 'AdminEmployees/edit',
				addItem: 'AdminEmployees/add'
			}),
			save() {
				if(this.employee) {
					this.changeItem(this.item);			
				} else {
					this.addItem(this.item);
				}	
				this.$router.go(-1);
			},
			close() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.card__text {
		padding: 0 30px;
	}
</style>