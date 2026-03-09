import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFileSync } from 'node:fs';

const pedidoSchema = JSON.parse(
  readFileSync(
    new URL('../../src/models/pedido/pedido.schema.json', import.meta.url),
    'utf8'
  )
);
const itemSchema = JSON.parse(
  readFileSync(
    new URL('../../src/models/item/item.schema.json', import.meta.url),
    'utf8'
  )
);
const itemSchemaEmbedded = { ...itemSchema };
delete itemSchemaEmbedded.$id;

const pedidoSchemaForTest = {
  ...pedidoSchema,
  properties: {
    ...pedidoSchema.properties,
    items: {
      ...pedidoSchema.properties.items,
      items: itemSchemaEmbedded,
    },
  },
};

describe('JSON schemas', () => {
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);

  it('valid payload should pass pedido schema', () => {
    const validate = ajv.compile(pedidoSchemaForTest);
    const good = {
      numeroPedido: 'foo',
      valorTotal: 1,
      dataCriacao: '2023-07-19T12:24:11.529Z',
      items: [{ idItem: '1', quantidadeItem: 1, valorItem: 10 }],
    };
    expect(validate(good)).toBe(true);
  });

  it('missing field should fail', () => {
    const validate = ajv.compile(pedidoSchemaForTest);
    const bad = { valorTotal: 1 };
    expect(validate(bad)).toBe(false);
    expect(validate.errors).toBeTruthy();
  });

  it('item schema rejects extra props', () => {
    const validate = ajv.compile(itemSchema);
    expect(
      validate({ idItem: 'x', quantidadeItem: 1, valorItem: 1, extra: 5 })
    ).toBe(false);
  });
});
