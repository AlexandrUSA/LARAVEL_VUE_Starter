import axios from 'axios'

export const state = {
	employees: []
}

export const getters = {
	employees: state => state.employees
}

export const mutations = {
  load (state, employees) {
  	state.employees = employees;
  },
  add (state, employees) {
			state.employees.push(employees);
	},
	edit ( state, employee) {
		let index = state.employees.findIndex(el => el.id == employee.id);
		state.employees.splice(index, 1, employee);
	},
	remove (state, employee_id) {
		let pos = state.employees.findIndex(el => el.id == employee_id)
		if(pos !== -1) state.employees.splice(pos, 1);
	}
}

export const actions = {
	async load ({ commit }) {
    try {
      const { data } = await axios.get('/api/employees');
      commit('load', data )
    } catch (e) { 
    	console.error('Не загрузились сотрудники', e)
    }
  },
  async add ({ commit }, payload) {
    try {
      const { data } = await axios.post('/api/employees', payload)
      commit('add', data )
    } catch (e) { 
    	console.error('Не создался сотрудник', e)
    }
  },
  async edit({ commit }, employee ) {
    try {
      const { data } = await axios.put('/api/employees/' + employee.id, employee);
      commit('edit', data); 
    } catch (e) {
      console.error('Не изменился сотрудник', e);
    }
  },
  async remove({ commit }, employee ) {
    try {
      await axios.delete('/api/employees/' + employee);
      commit('remove', employee); 
    } catch (e) {
      console.error('Не удалился сотрудник', e);
    }
  }
}




// export default {
// 	namespaced: true,
// 	state: {
// 		employees: []
// 	},
// 	getters: {
// 		employees( state ){
// 			return state.employees;
// 		}
// 	},
// 	mutations: {
// 		load( state, employees ) {
// 			state.employees = employees;
// 		},
// 		add(state, employees) {
// 			state.employees.push(employees);
// 		},
// 		edit( state, employee) {
// 			let index = state.employees.findIndex(el => el.id == employee.id);
// 			state.employees.splice(index, 1, employee);
// 		},
// 		remove(state, employee_id) {
// 			let pos = state.employees.findIndex(el => el.id == employee_id)
// 			if(pos !== -1) state.employees.splice(pos, 1);
// 		}
// 	},
// 	actions: {
// 		load( store ) {
// 			fetch('http://my/admin/employees', {
// 				method: 'GET'
// 			})
// 			  .then(response => response.json())
// 			  .then(data => store.commit('load', data))
// 		},
// 		add( store, employee ) {
// 			let data = new FormData();
// 			for(let key in employee) data.append(key, employee[key]);
// 			fetch('http://my/admin/employees', {
// 				method: 'POST',
// 				body: data
// 			})
// 			.then(response => response.json())
// 			.then(data => {	
// 			  store.commit('add', data);
// 			});		  		   
// 		},
// 		edit( store, employee ) {
// 			var xhr = new XMLHttpRequest();
// 				xhr.open('PUT','http://my/admin/employees/' + employee.id);
// 				xhr.setRequestHeader('Content-Type', 'application/json');
// 				xhr.onload = () => {
// 				  if (xhr.status === 200) store.commit('edit', JSON.parse(xhr.responseText)); 
// 				};
// 				xhr.send(JSON.stringify(employee));		 
// 		},
// 		remove(store, employee_id) {
// 			fetch('http://my/admin/employees/' + employee_id, {
// 				method: 'DELETE'
// 			})
// 			.then(response => store.commit('remove', employee_id))		
// 		}
// 	}
// };