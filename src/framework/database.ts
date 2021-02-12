import { MongoClient } from 'mongodb';

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL || 'mongo://localhost:27017';
const mongoDB = process.env.MONGO_DB || 'docspace';

export async function connect() {
  const mongoClient = new MongoClient(mongoURL);
  await mongoClient.connect();
  console.log('- Database connected');

  return mongoClient.db(mongoDB);
}
