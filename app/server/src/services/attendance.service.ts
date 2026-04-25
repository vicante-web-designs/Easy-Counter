import supabase from '../config/supabase.js';
import { AttendanceType } from '../types/attendance.type.js';

// Post AttendanceSubmission
export const postAttendanceSubmission = async (attendanceData: AttendanceType) => {
  return await supabase.from("attendance_submissions").insert(attendanceData).select()
}

// Get all sections
export const getAllAttendanceSubmissions = async () => {
  const { data, error } = await supabase.from("attendance_submissions").select('*')

  if(error) throw error

  return data
}

// Get one section
export const getOneAttendanceSubmission = async (attendance_id: string) => {
  const { data, error } = await supabase.from("attendance_submissions").select('*').eq('id', attendance_id).single()
  
  if(error) throw error

  return data
}

// Update Section
export const updateSection = async (attendance_id: string, updatedAttendance: Object) => {
  const { data, error } = await supabase.from("attendance_submissions").update(updatedAttendance).eq("id", attendance_id).select().single()

  if(error) throw error

  return data
}

// Delete Section
export const deleteSection = async (attendance_id: string) => {
  const { data, error } = await supabase.from("attendance_submissions").delete().eq("id", attendance_id).select().single()

  if(error) throw error

  return data
}