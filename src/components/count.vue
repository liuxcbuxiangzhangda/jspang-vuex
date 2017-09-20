
<template>
  <div>
    <button @click="add(10)">add</button><!--简写mutations的方法-->
    <button @click="$store.commit('reduce')">reduce</button>
    <button @click="addaction(10)">++</button>
    <button @click="reduce">--</button>
    {{msg}}
    <h2>{{$store.state.count}}--{{count}}</h2>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
  export default({
      data(){
          return {
            msg:"hello"
          }
      },
    /*第一种*/
    /*computed:{
          count(){
            return this.$store.state.count
          }
    },*/
    /*第二种*/
    /*computed:mapState({
        count:state=>state.count

    }),*/
    /*第三种*/
    computed:{
      ...mapState(['count']),/*es6扩展的写法*/
      /*count:function () {
        return this.$store.getters.count
      }*/
      ...mapGetters(['count'])  /*getters的简写*/
    },
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addaction','reduceaction'])
    }
,
      store
  })
</script>
