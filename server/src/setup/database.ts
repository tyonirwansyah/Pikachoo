import mongoose from 'mongoose';
import { MONGO_URI } from '../config/env';

export default async function databaseConnection(): Promise<void> {
  try {
    console.log(`[SETUP] - Connecting to database...`);

    await mongoose.connect(MONGO_URI);
  } catch (e) {
    console.log(e);
  }
}

mongoose.connection.on('error', (error) => {
  console.log(`[ERROR] - Database connection failed:\n${error.message}`);

  setTimeout(async () => {
    console.log('[SETUP] Reconnecting database connection');

    await databaseConnection();
  }, 5000);
});
