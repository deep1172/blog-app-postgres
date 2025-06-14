// libs/db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
});

const DBCon = async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢 PostgreSQL connection has been established successfully.");
  } catch (error) {
    console.error("🔴 Unable to connect to the database:", error);
    process.exit(1); // Optional: stop app if DB fails
  }
};

export { sequelize };
export default DBCon;
