<template>
  <div>
    <p>{{message}}</p>
    <p>click count: {{count}}</p>
    <button @click="increase">increase</button><!--可以直接调用引入的action-->
    <button @click="reset">reset</button>
  </div>
</template>

<script>
  import {increase, reset} from 'store/modules/counter/actions' // 引入action
  export default {
    data: () => ({message: 'Hello Vue.js!'}),
    vuex: {
      actions: {increase, reset},
      getters: {
        count: ({counter}) => counter.count
      }
    }
  }
</script>
