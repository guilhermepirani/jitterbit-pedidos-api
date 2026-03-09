class PedidoResponse {
  constructor({ orderId, value, creationDate, items }) {
    this.orderId = orderId;
    this.value = value;
    this.creationDate = creationDate;
    this.items = items;
  }
}

export default PedidoResponse;
