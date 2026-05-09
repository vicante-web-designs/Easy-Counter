import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Database(path.join(__dirname, '../../../data/easycounter.db'))

db.pragma('journal_mode = WAL')

db.exec(`
    CREATE TABLE IF NOT EXISTS services(
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      date TEXT NOT NULL,
      is_active INTEGER DEFAULT 0
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS sections (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        display_order INTEGER DEFAULT 0,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS attendance (
        id TEXT PRIMARY KEY,
        service_id TEXT NOT NULL,
        section_id TEXT NOT NULL,
        men INTEGER DEFAULT 0,
        women INTEGER DEFAULT 0,
        children INTEGER DEFAULT 0,
        counter_name TEXT,
        submitted_at TEXT DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (service_id) REFERENCES services(id),
        FOREIGN KEY (section_id) REFERENCES sections(id)
    );
  `)

  export default db