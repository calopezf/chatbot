<template>
  <div class="containerGeneralInput">
    <input type="text" class="input" v-on:keyup.enter="addChat" v-model="userInput">
    <button v-on:click="addChat"  class="iconSend" style="border: 0; background: transparent"><img src="../assets/img/send.png" style="width: 30px; height: 30px;" ></button>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          name: "FooterComponent",
          userInput:''
        }
      },
      methods: {
        addChat: function () {
         // Cuando se llama el método de forma sincrona
         // return this.$store.commit('addChat',this.userInput)
         // Se llama al método de forma Asincrona
          this.$store.dispatch('addChat',this.userInput)
          this.userInput = ''
          //this.created()
        }
      }
    }
</script>

<style scoped>
  .containerGeneralInput{
    border: 0px solid #dedede;
    background-color: #F1F2D5;
    border-radius: 2px;
    width: 530px;
    height: 85px;
  }

  .iconSend{
    margin-top: 18px;
    margin-left: 5px;
    width: 40px;
    height: 40px;
  }
</style>
