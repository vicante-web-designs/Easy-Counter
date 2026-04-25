import supabase from '../config/supabase.js';


// Create Section
export const createSection = async (sectionName: string) => {
  return await supabase.from("sections").insert(sectionName).select()
}

// Get all sections
export const getAllSections = async () => {
  const { data, error } = await supabase.from("sections").select('*')

  if(error) throw error

  return data
}

// Get one section
export const getOneSection = async (section_id: string) => {
  const { data, error } = await supabase.from("sections").select('*').eq('id', section_id).single()
  
  if(error) throw error

  return data
}

// Update Section
export const updateSection = async (section_id: string, updatedSection: Object) => {
  const { data, error } = await supabase.from("sections").update(updatedSection).eq("id", section_id).select().single()

  if(error) throw error

  return data
}

// Delete Section
export const deleteSection = async (section_id: string) => {
  const { data, error } = await supabase.from("sections").delete().eq("id", section_id).select().single()

  if(error) throw error

  return data
}