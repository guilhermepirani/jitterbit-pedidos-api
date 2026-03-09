class Item {
  constructor({ productId, quantity, price }) {
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }

  static fromRequest(req) {
    return new Item({
      productId: Number(req.idItem),
      quantity: req.quantidadeItem,
      price: req.valorItem,
    });
  }

  toResponse() {
    return {
      productId: this.productId,
      quantity: this.quantity,
      price: this.price,
    };
  }
}

export default Item;
