import db from '../config/database.js'

export const toggleServiceActivation = async (service_id: string) => {
  const stmt = db.prepare(`
      UPDATE services
      SET is_active = CASE
        WHEN is_active = 1 THEN 0
        ELSE 1
      END
      WHERE id = ?
    `)

    return stmt.run(service_id)
}