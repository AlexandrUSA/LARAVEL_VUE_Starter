<template>
  			<div class="employee">
  				<h2>Сотрудник</h2>
  				<div class="employee__avatar">
  					<div class="employee__avatar-container">
  						<div class="avatar__overlay">
  							<v-btn depressed large color="primary">{{avatarMsg}}</v-btn>
  						</div>
  						<img :src="avatar" alt="avatar">
  					</div>			
  					
  				</div>
	  			<div class="employee__descr">
	  				<p class="employee__text">
	  					<b>Имя:</b> <i>{{item.first_name}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Фамилия:</b> <i>{{item.last_name}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Отчество:</b> <i>{{item.patronymic ? item.patronymic : 'Не указано'}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Должность:</b> <i>{{item.position}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Телефон:</b> <i>{{item.phone_number}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Заработная плата:</b> <i>{{item.salary}} руб.</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>Адресс:</b> <i>{{item.address}}</i>
	  				</p>
	  				<v-divider></v-divider>
	  				<p class="employee__text">
	  					<b>День рождения:</b> <i>{{item.birthday}}</i>
	  				</p>
	  				<v-btn
				      color="info"
				      block
				      :to="{name: 'employeeEdit', params: {id: item.id, employee: item}}"
				    >
				      Изменить данные
				    </v-btn>
	  			</div>
  			</div>		
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	export default {
		props: {
			id: {
				type: [Number, String],
				required: true
			}
		},
		data() {
			return {
				item: {}
			}
		},
		computed: {
			avatarMsg() {
				return (this.item.avatar) ? 'Изменить изображение' : 'Добавить изображение';
			},
			avatar() {
				return (this.item.avatar) ? this.item.avatar : "http://dragene.no/wp-content/uploads/2016/06/default1.jpg"
			}
		},
		created() {
			this.load();
		},
		methods: {
			load() {
				fetch('/api/employees/' + this.id, {
				method: 'GET'
			})
			  .then(response => response.json())
			  .then(data => this.item = data)
			}
		}
	}
</script>

<style scoped>
	* {
		box-sizing: border-box;;
		font-family: 'Roboto', sans-serif;
	}

	h2 {
		flex-basis: 100%;
	}

	p {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 10px;
		transition: background-color .3s;
	}

	p:hover {
		background-color: rgba(255, 255, 255, .1);
	}
	.employee {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
		width: 90%;
		margin: 30px auto;
		padding: 15px;
		border-radius: 5px;
		box-shadow: 0 0 13px rgba(0, 0, 0, .5);
	}
	.employee::before,
	.employee::after {
		content: "";
		display: block;
		clear: both;
	}

	.employee__avatar {	
		width: 30%;
	}

	.employee__avatar-container {
		position: relative;
		width: 316px;
		height: 316px;
		margin: 0 auto;

	}

	.avatar__overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, .3);
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity .3s;
	}
	.employee__avatar:hover .avatar__overlay  {
		opacity: 1;
	}
	.employee__avatar img {
		display: block;
		width: 100%;
		max-width: 316px;
		margin: 0 auto;
	}

	.employee__descr {
		width: 70%;
		padding:  10px 45px;
		font-size: 18px;
	}


</style>
