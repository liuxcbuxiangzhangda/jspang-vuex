/**
 * Created by Administrator on 2017/9/19.
 */
2
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
/*状态对象*/
const state={
  count:1
}
/*改变状态对象的方法*/
const mutations={
  add(state,n){
    state.count+=n
  },
  reduce(state){
    state.count--
  }
}
/*过滤器，每改变一次就会执行一次getters*/
const getters={
  count:function (state) {
    return state.count+=10
  }
}
const actions={
  addaction(context){
      context.commit('add',10)
      setTimeout(()=>{context.commit('reduce')},3000)
      console.log("先执行")
  },
  redduceaction({commit}){
    commit('reduce')
  }
}
export default new Vuex.Store({
   state,mutations,getters,actions
})
