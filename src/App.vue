<template>
  <div id="app">
    <header-component></header-component>
    <body-component></body-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'

export default {
  components:{
    HeaderComponent,
    BodyComponent,
    FooterComponent
  },
  data () {
    return{
      name: 'App',
      chats: []
    }
  }
}
</script>

<style>

</style>
