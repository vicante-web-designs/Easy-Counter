import db from '../config/database.js'
import { v4 as uuidv4 } from 'uuid'

// Create Section
export function createChurchSection(sectionData: { name: string; display_order?: number }) {
    const id = uuidv4()

    db.prepare(`
        INSERT INTO sections (id, name, display_order)
        VALUES (?, ?, ?)
    `).run(id, sectionData.name, sectionData.display_order ?? 0)

    return db.prepare('SELECT * FROM sections WHERE id = ?').get(id)
}

// Get All Sections
export function getAllChurchSections() {
    return db.prepare(`
        SELECT * FROM sections
        ORDER BY display_order ASC
    `).all()
}

// Get One Section
export function getOneChurchSection(section_id: string) {
    const section = db.prepare('SELECT * FROM sections WHERE id = ?').get(section_id)

    if (!section) throw new Error('Section not found')

    return section
}

// Update Section
export function updateChurchSection(section_id: string, updatedSection: { name?: string; display_order?: number }) {
    const existing = db.prepare('SELECT * FROM sections WHERE id = ?').get(section_id)
    if (!existing) throw new Error('Section not found')

    db.prepare(`
        UPDATE sections
        SET name = ?, display_order = ?
        WHERE id = ?
    `).run(
        updatedSection.name ?? (existing as any).name,
        updatedSection.display_order ?? (existing as any).display_order,
        section_id
    )

    return db.prepare('SELECT * FROM sections WHERE id = ?').get(section_id)
}

// Delete Section
export function deleteChurchSection(section_id: string) {
    const existing = db.prepare('SELECT * FROM sections WHERE id = ?').get(section_id)
    if (!existing) throw new Error('Section not found')

    db.prepare('DELETE FROM sections WHERE id = ?').run(section_id)

    return true
}

// Get section ID by name
export const getSectionIdByName = (section_name: string) => {
  const section = db.prepare(`
        SELECT id
        FROM sections
        WHERE name = ?
    `).get(section_name) as { id: string } | undefined

  if(!section){
    throw new Error('Cannot get section ID')
  }

  return section.id
}