import e, { Request, Response } from 'express';
import { generateAttendanceCSV } from '../services/csvExport.service.js';

// TODO: Convert to exporting from local DB
export const handleGenerateAttendanceCSV = async (req: Request, res: Response) => {

    const { serviceID } = req.params

  try {
    
    // // // Get service name and date for the filename
    // // const { data: service } = await supabase.from('services').select('name, date').eq('id', serviceID).single()

    // // Generate the CSV
    // const csv = await generateAttendanceCSV(serviceID as string)

    // // Build a clean filename: "First-Service-2025-04-20.csv"
    // const filename = service ? `${service.name.replace(/\s+/g, '-')}-${service.date}.csv`: `attendance-${serviceID}.csv`

    // // Set headers so browser treats it as a file download
    // res.setHeader('Content-Type', 'text/csv')
    // res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)

    // res.send(csv)

  } catch (error) {
    if(error instanceof Error){
        res.status(500).json({ error: error.message })
    }
  }
}