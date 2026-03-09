class PedidoRequest {
  constructor({ numeroPedido, valorTotal, dataCriacao, items }) {
    if (!numeroPedido || valorTotal === null || !dataCriacao || !items) {
      throw new Error('PedidoRequest: falta campo obrigatório');
    }

    this.numeroPedido = numeroPedido;
    this.valorTotal = valorTotal;
    this.dataCriacao = dataCriacao;
    this.items = items;
  }
}

export default PedidoRequest;
