import { MongoClient, MongoClientOptions } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

// Check the environment variables
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
interface MongoConnection {
  conn: { client: MongoClient; db: import('mongodb').Db } | null;
  promise: Promise<{ client: MongoClient; db: import('mongodb').Db }> | null;
}

let cached: MongoConnection | undefined = (global as unknown as { mongo: MongoConnection | undefined }).mongo;

if (!cached) {
  cached = (global as unknown as { mongo: MongoConnection | undefined }).mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached && cached.conn) {
    return { db: cached.conn.db, client: cached.conn.client };
  }

  if (cached && !cached.promise) {
    const opts: MongoClientOptions = {};

    cached.promise = MongoClient.connect(MONGODB_URI!, opts).then((client) => {
      return {
        client,
        db: client.db(MONGODB_DB),
      };
    });
  }
  
  if (cached) {
    cached.conn = await cached.promise!;
    return { db: cached.conn.db, client: cached.conn.client };
  }
  
  throw new Error('Failed to initialize database connection');
}