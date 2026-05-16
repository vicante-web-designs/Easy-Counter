import db from '../config/database.js'
import { v4 as uuidv4 } from 'uuid'

// Create Attendance
export function createChurchAttendance(attendanceData: {
    section_id: string
    service_id: string
    men: number
    women: number
    children: number
    counter_name?: string
}) {
    const id = uuidv4()

    db.prepare(`
        INSERT INTO attendance (id, section_id, service_id, men, women, children, counter_name)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        id,
        attendanceData.section_id,
        attendanceData.service_id,
        attendanceData.men,
        attendanceData.women,
        attendanceData.children,
        attendanceData.counter_name ?? null
    )

    return db.prepare('SELECT * FROM attendance WHERE id = ?').get(id)
}

// Get All Attendance
export function getAllChurchAttendance() {
    return db.prepare(`
        SELECT 
            a.*,
            s.name as section_name
        FROM attendance a
        LEFT JOIN sections s ON a.section_id = s.id
        ORDER BY a.submitted_at DESC
    `).all()
}

// Get Attendance By Service
export function getAttendanceByService(service_id: string) {
    return db.prepare(`
        SELECT 
            a.*,
            s.name as section_name
        FROM attendance a
        LEFT JOIN sections s ON a.section_id = s.id
        WHERE a.service_id = ?
        ORDER BY a.submitted_at ASC
    `).all(service_id)
}

// Get Totals By Service — aggregated per section
export function getTotalsByService(service_id: string) {
    return db.prepare(`
        SELECT
            s.name as section_name,
            SUM(a.men) as men,
            SUM(a.women) as women,
            SUM(a.children) as children,
            SUM(a.men + a.women + a.children) as total
        FROM attendance a
        LEFT JOIN sections s ON a.section_id = s.id
        WHERE a.service_id = ?
        GROUP BY a.section_id
        ORDER BY s.display_order ASC
    `).all(service_id)
}

// Get One Attendance
export function getOneChurchAttendance(attendance_id: string) {
    const record = db.prepare('SELECT * FROM attendance WHERE id = ?').get(attendance_id)

    if (!record) throw new Error('Attendance record not found')

    return record
}

// Update Attendance
export function updateChurchAttendance(attendance_id: string, updatedData: {
    men?: number
    women?: number
    children?: number
    counter_name?: string
}) {
    const existing = db.prepare('SELECT * FROM attendance WHERE id = ?').get(attendance_id) as any
    if (!existing) throw new Error('Attendance record not found')

    db.prepare(`
        UPDATE attendance
        SET men = ?, women = ?, children = ?, counter_name = ?
        WHERE id = ?
    `).run(
        updatedData.men ?? existing.men,
        updatedData.women ?? existing.women,
        updatedData.children ?? existing.children,
        updatedData.counter_name ?? existing.counter_name,
        attendance_id
    )

    return db.prepare('SELECT * FROM attendance WHERE id = ?').get(attendance_id)
}

// Delete Attendance
export function deleteChurchAttendance(attendance_id: string) {
    const existing = db.prepare('SELECT * FROM attendance WHERE id = ?').get(attendance_id)
    if (!existing) throw new Error('Attendance record not found')

    db.prepare('DELETE FROM attendance WHERE id = ?').run(attendance_id)

    return true
}