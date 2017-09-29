/**
 * Created by Administrator on 2017/9/19.
 */

/*
* 简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。
*state:状态对象
*action
* mutations 改变状态
* getter  过滤操作
* */
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
