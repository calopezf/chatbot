<template>
  <div class="containerGeneral">
    <div class="fechaActual"><span>{{ new Date()}}</span></div>
    <ul style="list-style: none;">
      <li v-for= "ch in chats" style="list-style:none" >
        <conversation-component v-bind:nombreCliente="ch.nombreCliente" v-bind:fechaHora="ch.fechaHora" v-bind:mensaje="ch.mensaje" v-bind:tipoContenedor="ch.tipoComponente" v-bind:tipoIcono="ch.tipoIcono"></conversation-component>
      </li>
    </ul>
  </div>
</template>

<script>
  import ConversationComponent from './ConversationComponent'
    export default {
      computed:{
        chats(){
          return this.$store.state.chats
        }
      },
      components:{
        ConversationComponent
      },
      data(){
        return{
          name: "BodyComponent"
        }
      }
    }
</script>

<style scoped>
  .containerGeneral{
    border: 1px solid #dedede;
    background-color: #fff;
    border-radius: 2px;
    padding-left: 10px;
    width: 530px;
    height: 430px;
    overflow:scroll;
  }

  .fechaActual{
    padding-top: 10px;
    font-weight: bold;
  }
</style>
