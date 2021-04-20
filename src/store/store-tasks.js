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
  }

}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
