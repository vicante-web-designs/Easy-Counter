import { Request, Response } from 'express';
import { createChurchAttendance, getAllChurchAttendance, getOneChurchAttendance, updateChurchAttendance, deleteChurchAttendance } from '../services/churchAttendance.service.js';

export const handleCreateChurchAttendance = async (req: Request, res: Response) => {
  try {

      const churchAttendanceData = req.body
      
      const data = await createChurchAttendance(churchAttendanceData)

      return res.status(201).json(data)

  } catch (error) {

    if(error instanceof Error){

      return res.status(500).json({ error: error.message })

    }

  }

}