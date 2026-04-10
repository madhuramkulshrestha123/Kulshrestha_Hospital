import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Only throw error in production if MONGODB_URI is missing
// In development, we can work without MongoDB
if (!MONGODB_URI && process.env.NODE_ENV === 'production') {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
declare const global: {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
} & typeof globalThis;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If no MongoDB URI is provided, return null to indicate no database connection
  if (!MONGODB_URI) {
    return null;
  }

  if (cached && cached.conn) {
    return cached.conn;
  }

  if (cached && !cached.promise) {
    const opts: ConnectOptions = {
      // Remove deprecated options
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
      return m;
    });
  }
  
  if (cached) {
    cached.conn = await cached.promise!;
    return cached.conn;
  }
  
  throw new Error('Failed to initialize database connection');
}

export default dbConnect;