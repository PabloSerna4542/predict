const mongoose = require("mongoose");
const MONGO_URI= process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("[DB] Conectado a MongoDB");
  } catch (err) {
    console.error("[DB] Error de conexión:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
