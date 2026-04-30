import supabase from '../config/supabase.js';


// Create Section
export const createChurchSection = async (sectionName: string) => {
  return await supabase.from("sections").insert(sectionName).select()
}

// Get all sections
export const getAllChurchSections = async () => {
  const { data, error } = await supabase.from("sections").select('*')

  if(error) throw error

  return data
}

// Get one section
export const getOneChurchSection = async (section_id: string) => {
  const { data, error } = await supabase.from("sections").select('*').eq('id', section_id).single()
  
  if(error) throw error

  return data
}

// Update Section
export const updateChurchSection = async (section_id: string, updatedSection: Object) => {
  const { data, error } = await supabase.from("sections").update(updatedSection).eq("id", section_id).select().single()

  if(error) throw error

  return data
}

// Delete Section
export const deleteChurchSection = async (section_id: string) => {
  const { data, error } = await supabase.from("sections").delete().eq("id", section_id).select()

  if(error) throw error

  if(!data || data.length === 0){
        throw new Error('Service not found')
    }

  return true
}