import { Sequelize } from 'sequelize';

const database = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  define: {
    timestamps: true,
    underscored: true,
  },
});

export default database;
