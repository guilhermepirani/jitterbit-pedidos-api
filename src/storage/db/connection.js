// Precisa ser carregado dotenv antes de importar qualquer outro módulo para garantir
// que as variáveis de ambiente sejam carregadas corretamente
import dotenv from 'dotenv';
const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}` });

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
  }
);

async function initDb() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida.');
    await sequelize.sync();
  } catch (err) {
    console.error('Erro conectando ao banco:', err);
    process.exit(1);
  }
}

export { sequelize, initDb };
