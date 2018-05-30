<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <h1>{{ msg }}</h1> -->
    <h2>{{count}}</h2>
    <button @click="handleClick">+</button>
    <Message :msg="msg" />
  </div>
</template>

<script>
import Message from './components/Message'
export default {
  name: 'app',
  components: {
    Message
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  methods: {
    handleClick(e) {
      this.count++
      this.msg += 'a'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
