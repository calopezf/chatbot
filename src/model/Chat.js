// Modelo Chat para conversacion.
export default class Chat {
  constructor() {
    this.mensaje = "";
    this.tipoComponente = "";
    this.tipoCliente= "";
    this.nombreCliente = "";
    this.fechaHora = "";
    this.tipoIcono = "";
  }
  cargaDatos(mensaje, tipoComponente, tipoCliente, nombreCliente, fechaHora, tipoIcono) {
    this.mensaje = mensaje;
    this.tipoComponente = tipoComponente;
    this.tipoCliente= tipoCliente;
    this.nombreCliente =nombreCliente;
    this.fechaHora = fechaHora;
    this.tipoIcono = tipoIcono;
  }
}
