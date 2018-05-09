<template>
  <div class="banner">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          name: "HeaderComponent"
        }
      }
    }
</script>

<style scoped>
  .banner{
    background-color: #006699;
    width: 540px;
    height: 70px;
    position: relative;
    text-align: left;
  }
</style>
