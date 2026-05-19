export interface ServiceFormProps {
    service_id?: string
}

export interface Service {
    id: string
    name: string,
    is_active: number,
    created_at: string
}