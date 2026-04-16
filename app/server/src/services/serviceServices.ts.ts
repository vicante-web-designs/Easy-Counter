import supabase from '../config/supabase.js';
import { ServiceType } from '../types/serviceType.js';

// Create Service
export async function createService(serviceData: ServiceType) {
    return await supabase.from("services").insert(serviceData).select()
}

// Get Service
export async function getService(params:type) {
    
}

// Edit Service
export async function editService(params:type) {
    
}

// Delete Service
export async function deleteService(params:type) {
    
}