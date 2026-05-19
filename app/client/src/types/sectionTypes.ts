export interface Section {
    id: string
    name: string,
    display_order: number,
    created_at: string
}

export interface SectionFormProps {
    section_id?: string
}
