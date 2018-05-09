<template>
  <div :class="tipoContenedor">
    <div v-if="tipoIcono === 'iconChatDiners'" :class="tipoIcono"/>
    <div class="col-sm-7 col-md-7 col-xl-7 textClienteAndreaHeader">{{nombreCliente}}
      <div class="hourClienteAndrea">{{fechaHora}}</div>
   </div>
   <div class="textClienteAndrea">{{ mensaje}}</div>
   <div v-if="tipoIcono === 'iconChatUser'" :class="tipoIcono"/>
  </div>
</template>

<script>

    export default {
      props: ['nombreCliente', 'fechaHora', 'mensaje', 'tipoContenedor', 'tipoIcono'],
      data(){
        return {
          //name: "ConversationComponent"
        }
      }
    }
</script>

<style scoped>

  .textClienteAndrea{
    margin: 5px;
    margin-top: 22px;
    width: 88%;
    max-width: 88%;
    word-wrap: break-word;
  }

  .textClienteAndreaHeader{
    font-size: 12px;
    font-weight: bold;
    color: #006699;
    width: 300px;
    height: 15px;
    padding-left: 5px !important;
    position:absolute !important;
  }

  .hourClienteAndrea{
    font-size: 8px;
    width: 100px;
    height: 15px;
    position: relative;
  }

</style>
