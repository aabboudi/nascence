import { runMigrations, seedDatabase } from '@/db';

// Initialize database on server startup
let initialized = false;

export async function initializeDatabase() {
  if (initialized) return;
  
  try {
    console.log('Initializing database...');
    await runMigrations();
    await seedDatabase();
    initialized = true;
    console.log('Database initialization completed');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}
