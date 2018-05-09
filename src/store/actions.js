export default {
  //Métodos que son Asincronos
  addChat(context, userInput){
    context.commit('addChat',userInput)
  }
}
