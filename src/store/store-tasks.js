const state = {
  tasks: {
    'ID1':{
      name: 'taskcontrol',
      deadLine: '24/04/2021',
      site: 'www.google.com',
      importance: true,
      checkbox: false
    },
    'ID2':{
      name: 'eCalloiro',
      deadLine: '24/05/2021',
      site: 'www.google.com',
      importance: true,
      checkbox: true
    },
    'ID3':{
      name: 'API de eCalloiro',
      deadLine: '04/04/2021',
      site: 'www.google.com',
      importance: false,
      checkbox: false
    },
  },
  tasksIndividual: {
    'ID1':{
      name: 'Estudar metodos MVC',
      deadLine: '25/05/2021',
      site: 'www.google.com',
      importance: true,
      checkbox: false
    },
    'ID2':{
      name: 'React & react native',
      deadLine: '06/06/2021',
      site: 'www.google.com',
      importance: true,
      checkbox: true
    },
    'ID3':{
      name: 'Angular Js',
      deadLine: '04/07/2021',
      site: 'www.google.com',
      importance: false,
      checkbox: false
    },
  },
  tasksPersonal: {
    'ID1':{
      name: 'Estudar Mais',
      deadLine: '24/04/2021',
      site: 'www.google.com',
      importance: false,
      checkbox: false
    },
    'ID2':{
      name: 'blabal',
      deadLine: '24/05/2021',
      site: 'www.google.com',
      importance: false,
      checkbox: true
    },
    'ID3':{
      name: 'blabla',
      deadLine: '04/04/2021',
      site: 'www.google.com',
      importance: false,
      checkbox: true
    },
  }

}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  },
  tasksIndividual: (state) => {
    return state.tasksIndividual
  },
  tasksPersonal: (state) => {
    return state.tasksPersonal
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
