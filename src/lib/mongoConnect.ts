const mongoose = require("mongoose");

const connection: any = {};
const dbConnect = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(
      "mongodb+srv://babairanajit:vap44Ga70PFS4uQU@cluster0.f3zfwb0.mongodb.net/ProductDb"
    );
    console.log("db", db.connections[0].readyState);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
