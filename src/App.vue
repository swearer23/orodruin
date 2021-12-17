<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from './components/MainContainer'

export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
