<template>
  <div id="app">
  <Header></Header>
    <Tab></Tab>
    <transition appear enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Tab from './components/Tab/Tab'
export default {
  name: 'App',
  components:{
    Header,
    Tab
  }
}
</script>

<style>
</style>
