const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Ping success");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
