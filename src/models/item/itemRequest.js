class ItemRequest {
  constructor({ idItem, quantidadeItem, valorItem }) {
    if (!idItem || quantidadeItem === null || valorItem === null) {
      throw new Error('ItemRequest: falta campo obrigatório');
    }

    this.idItem = idItem;
    this.quantidadeItem = quantidadeItem;
    this.valorItem = valorItem;
  }
}

export default ItemRequest;
