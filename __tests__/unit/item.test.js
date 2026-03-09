import ItemRequest from '../../src/models/item/itemRequest.js';
import Item from '../../src/models/item/item.js';

describe('Item model', () => {
  it('should map ItemRequest to Item and back to response', () => {
    const req = new ItemRequest({
      idItem: '2434',
      quantidadeItem: 1,
      valorItem: 1000,
    });

    const item = Item.fromRequest(req);

    expect(item).toBeInstanceOf(Item);
    expect(item.productId).toBe(2434);
    expect(item.quantity).toBe(1);
    expect(item.price).toBe(1000);

    const res = item.toResponse();
    expect(res).toEqual({
      productId: 2434,
      quantity: 1,
      price: 1000,
    });
  });

  it('should throw when required fields are missing', () => {
    expect(() => new ItemRequest({})).toThrow(/falta campo obrigatório/);
  });
});
