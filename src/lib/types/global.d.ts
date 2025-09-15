import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      } | undefined;
      
      mongo: {
        conn: { client: MongoClient; db: import('mongodb').Db } | null;
        promise: Promise<{ client: MongoClient; db: import('mongodb').Db }> | null;
      } | undefined;
    }
  }
}

// For compatibility with both NodeJS.Global and globalThis
declare const global: NodeJS.Global & typeof globalThis;