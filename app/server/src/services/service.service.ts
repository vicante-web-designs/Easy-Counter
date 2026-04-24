import supabase from '../config/supabase.js';
import { ServiceType } from '../types/service.type.js';

// Create Service
export async function createService(serviceData: ServiceType) {
    return await supabase.from("services").insert(serviceData).select()
}

// Get All Services
export async function getAllServices() {
    const {data, error} = await supabase.from("services").select('*')

    return data
}

// Get One Services
export async function getOneService(service_id: string) {
    const { data, error } = await supabase.from("services").select('*').eq("id", service_id).single()

    if(error) throw error;
}

// Edit Service
export async function updateService(service_id: string, updates: object) {
    const { data, error } = await supabase.from("services").update(updates).eq("id", service_id).select().single()

    if(error) throw error
}

// Delete Service
export async function deleteService(service_id: string) {
    const { data, error } = await supabase.from("services").delete().eq("id", service_id).select().single()

    if(error) throw error
} // work