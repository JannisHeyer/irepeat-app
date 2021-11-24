import client from "./database";

export async function getCards() {
  await client.connect();
  const db = client.db("iRepeat");
  const collection = db.collection("Cards");
  const data = await collection.find().toArray();
  console.log("in getCards", data);
  return data;
}
