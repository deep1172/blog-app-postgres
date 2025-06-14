import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

const DBCon = async () => {
  try {
    await pool.connect();
    console.log('🟢 PostgreSQL is connected');
  } catch (error) {
    console.error('🔴 Error connecting to DB:', error);
  }
};

export default DBCon;

