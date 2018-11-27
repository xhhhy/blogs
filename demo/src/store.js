import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"",
    tableData: [{
      name:"",
      region:""
    }]
  },
  mutations: {
    changetitle(state,newa){
      state.title= newa || "暂无"
    },
    changetableData(state,newdata){
      state.tableData= newdata || "暂无"
    }
  },
  actions: {
    changetitle(context, newa) {
      context.commit('changetitle', newa)
  },
  changetableData(context, newdata) {
    context.commit('changetableData', newdata)
},
  }
})
