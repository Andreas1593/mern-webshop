import '../loadEnv.js';

import { MongoClient, Db } from 'mongodb';

const connString = process.env.ATLAS_URI;

const client = new MongoClient(connString!);

var db: Db;

export async function connectToServer() {
  await client.connect();
  db = client.db('webshop');
  console.log(`Connected to database: ${db.databaseName}`);
}
export function getDb() {
  return db;
}
