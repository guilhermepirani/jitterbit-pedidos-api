import PedidoRequest from '../../src/models/pedido/pedidoRequest.js';
import Pedido from '../../src/models/pedido/pedido.js';
import ItemRequest from '../../src/models/item/itemRequest.js';

describe('Pedido model', () => {
  it('should map PedidoRequest (with items) to Pedido and back', () => {
    const pedidoReq = new PedidoRequest({
      numeroPedido: 'v10089015vdb-01',
      valorTotal: 10000,
      dataCriacao: '2023-07-19T12:24:11.5299601+00:00',
      items: [
        new ItemRequest({
          idItem: '2434',
          quantidadeItem: 1,
          valorItem: 1000,
        }),
      ],
    });

    const pedido = Pedido.fromRequest(pedidoReq);

    expect(pedido.orderId).toBe('v10089015vdb-01');
    expect(pedido.value).toBe(10000);
    expect(pedido.creationDate).toBe(
      new Date('2023-07-19T12:24:11.5299601+00:00').toISOString()
    );
    expect(pedido.items).toHaveLength(1);
    expect(pedido.items[0].productId).toBe(2434);

    const res = pedido.toResponse();
    expect(res).toEqual({
      orderId: 'v10089015vdb-01',
      value: 10000,
      creationDate: pedido.creationDate,
      items: [
        {
          productId: 2434,
          quantity: 1,
          price: 1000,
        },
      ],
    });
  });

  it('should require all fields', () => {
    expect(() => new PedidoRequest({})).toThrow(/falta campo obrigatório/);
  });
});
