import Chat from '../model/Chat'

export default {
  // Métodos que son sincronos
  addChat(state, userInput){
    if (userInput === '') {
      return
    }
    var date = new Date()
    var chat = new Chat()
    chat.cargaDatos(userInput,
      'containerCliente', 'cliente',
      'Cristian Alejandro López Freire',
      date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
      'iconChatUser')
    state.chats.push(chat)
    //this.created()
  }
}
