import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

import Database from 'better-sqlite3';
import * as schema from './schema.js';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite, { schema });

migrate(db, { migrationsFolder: './drizzle' });
export { db, schema };