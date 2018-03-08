<template>
  <v-app id="inspire">
      <v-dialog v-model="deleteWindow" max-width="500px">
        <v-card>
					<v-card-title>
						<span class="headline">Внимание!</span>
					</v-card-title>
					<v-card-text>
						<v-flex xs12>{{deleteMsg}}</v-flex>
					</v-card-text>
					<v-card-actions>
						<v-btn outline color="info" @click.native="deleteConfirm">Удалить</v-btn>
						<v-btn outline color="error" @click.native="deleteCancel">Отмена</v-btn>
					</v-card-actions>
        </v-card>
      </v-dialog>  
      <v-card>
      	<v-card-title>
	      	<h2>Сотрудники</h2>
	      	<v-spacer></v-spacer>
	      	<v-text-field
						append-icon="search"
						label="Введите название"
						single-line			
						v-model="search"
	      	></v-text-field>
      	</v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        v-model="selected"
        select-all
        item-key="id"
				no-results-text="Совпадений не найдено!"
       	rows-per-page-text="Строк: "
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
        	<td>
		        <v-checkbox
		          primary
		          hide-details
		          v-model="props.selected"
		        ></v-checkbox>
		      </td>
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.first_name }}</td>
          <td>{{ props.item.last_name }}</td>
          <td>{{ props.item.position }}</td>
          <td>
          	<v-btn outline round :to="{name: 'employee', params: {id: props.item.id}}">Подробнее</v-btn>   
          </td>
        </template>
				<template slot="no-data">
          <v-alert :value="true" color="red" icon="warning">
        		Нет данных :(
      		</v-alert>
        </template>
			</v-data-table>
			<div class="table__buttons">
				<v-btn fab dark large color="cyan"
							:to="{name: 'employeeCreate'}">
      		<v-icon dark>add</v-icon>
    		</v-btn>
    		<transition  enter-active-class="buttonEnter" leave-active-class="buttonLeave" mode="out-in">
			 	<v-btn v-show="selected.length > 0" 
						class="delete-btn" color="error" 
						fab large dark
						@click="deleteDialog(selected)"
						>
      		<v-icon>delete</v-icon>
    		</v-btn>
			</transition>
			</div>		
		</v-card>		
	</v-app>		
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	export default {
		data: () => ({
      // Поиск / Выборка
			search: '',
			selected: [],
			dialog: false,
			// Удаление
			deleteWindow: false,
			deleteCategory: null,
			delMode: 'single',
			// Заголовки таблицы
			headers: [{
					text: 'ID',
					align: 'left',
					sortable: false,
					value: 'id'
				},
				{
					text: 'Имя',
					value: 'first_name'
				},
				{
					text: 'Фамилия',
					value: 'last_name'
				},
				{
					text: 'Должность',
					value: 'position'
				},
				{
					text: '',
					sortable: false
				}
			]
		}),
		computed: {
			deleteMsg() {
				return (this.selected.length == 1) ? 'Вы действительно хотите удалить данный элемент?' :
																						 'Вы действительно хотите удалить выбранные элементы?';
			},
			...mapGetters({
      items: 'AdminEmployees/employees'
    	})
		},
		methods: {
			deleteDialog(item) {
				this.deleteWindow = true;
				this.deleteCategory = item;
			},
			deleteConfirm() {
				this.selected.forEach(el => this.deleteItem(el.id));
				this.selected = [];
				this.deleteWindow = false;
			  this.editedID = null;			
			},
			deleteCancel() {
				this.deleteCategory = null;
				this.deleteWindow   = false;
			},
			close() {
				this.dialog = false;
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			},
			...mapActions({
				loadItems: 'AdminEmployees/load',
				deleteItem: 'AdminEmployees/remove'
			})
		}
	}
</script>

<style scoped>
	.table__buttons {
		position: absolute;
		bottom: -50px;
	}
	
	.dialog__activator {
		position: absolute;
		bottom: -30px;
		left: 40px;
		z-index: 1;
	}
	.card__title {
		justify-content: center;
	}
	.card__actions {
		justify-content: center;
	}
</style>
