import Item from '../item/item.js';

class Pedido {
  constructor({ orderId, value, creationDate, items }) {
    this.orderId = orderId;
    this.value = value;
    this.creationDate = creationDate;
    this.items = items;
  }

  static fromRequest(req) {
    return new Pedido({
      orderId: req.numeroPedido,
      value: req.valorTotal,
      creationDate: new Date(req.dataCriacao).toISOString(),
      items: (req.items || []).map((i) => Item.fromRequest(i)),
    });
  }

  toResponse() {
    return {
      orderId: this.orderId,
      value: this.value,
      creationDate: this.creationDate,
      items: this.items.map((i) => i.toResponse()),
    };
  }
}

export default Pedido;
