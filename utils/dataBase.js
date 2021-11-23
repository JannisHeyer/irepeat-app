import { MongoClient } from "mongodb";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
const client = new MongoClient(process.env.DB_URL, options);

export default client;
