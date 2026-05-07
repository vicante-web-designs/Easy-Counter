import { stringify } from 'csv-stringify'
import supabase from '../config/supabase.js'

export const generateAttendanceCSV = async (serviceID: string) => {
  // Fetch all attendance for this service
  //Join with sections so we get section name
  const { data, error } = await supabase.from('attendance').select('*, sections(name)').eq('service_id', serviceID).order('created_at', { ascending: true })

  if(error) throw new Error(error.message)
  if(!data || data.length === 0) throw new Error('No attendance data found for this service')

 // Shape data into rows
  const rows = data.map((record: any) => ({
    Section: record.sections?.name ?? 'Unknown',
    Men: record.men,
    Women: record.women,
    Children: record.children,
    Total: record.men + record.women + record.children,
    'Submitted At': new Date(record.created_at).toLocaleString()
  }))

  // Convert row to CSV string and return it
  return new Promise((resolve, reject) => {
    stringify(rows, { header: true }, (err, output) => {
        if(err) reject(err)
            else resolve(output)
    })
  })
}