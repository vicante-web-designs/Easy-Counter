import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';
import { ServiceType } from '../types/churchService.type.js';

// Create Service
export function createService(serviceData: ServiceType) {
    const id = uuidv4()

    const stmt = db.prepare(`
            INSERT INTO services (id, name)
            VALUES (?, ?)
        `)

    stmt.run(id, serviceData.name)

    return db.prepare('SELECT * FROM services WHERE id = ?').get(id)
}

// Get All Services
export async function getAllServices() {
    return db.prepare(`
        SELECT * FROM services
        ORDER BY created_at DESC
    `).all()
}

// Get One Services
export async function getOneService(service_id: string) {
    const service = db.prepare(`
        SELECT * FROM services WHERE id = ?
    `).get(service_id)

    if (!service) throw new Error('Service not found')

    return service
}

// Update Service
export async function updateService(service_id: string, updatedService: {name?: string }) {
    const existing = db.prepare('SELECT * FROM services WHERE id = ?').get(service_id)
    if (!existing) throw new Error('Service not found')

    const stmt = db.prepare(`
        UPDATE services
        SET name = ?
        WHERE id = ?
    `)

    stmt.run(
        updatedService.name ?? (existing as any).name,
        service_id
    )

    return db.prepare('SELECT * FROM services WHERE id = ?').get(service_id)
}

// Activate Service — deactivates all others first
export function activateService(service_id: string) {
    const existing = db.prepare('SELECT * FROM services WHERE id = ?').get(service_id)
    if (!existing) throw new Error('Service not found')

    // Deactivate all
    db.prepare('UPDATE services SET is_active = 0').run()

    // Activate target
    db.prepare('UPDATE services SET is_active = 1 WHERE id = ?').run(service_id)

    return db.prepare('SELECT * FROM services WHERE id = ?').get(service_id)
}

// Delete Service
export async function deleteService(service_id: string) {
    const existing = db.prepare('SELECT * FROM services WHERE id = ?').get(service_id)
    if (!existing) throw new Error('Service not found')

    db.prepare('DELETE FROM services WHERE id = ?').run(service_id)

    return true
}