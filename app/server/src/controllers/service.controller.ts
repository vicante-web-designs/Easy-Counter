import { Request, Response } from 'express';
import supabase from '../config/supabase.js';
import { createService, getAllServices, getOneService, updateService, deleteService } from '../services/service.service.js';

// Handle Create Service
export const handleCreateService = async (req: Request, res: Response) => {
  try {

        const serviceData = req.body;

        const data = await createService(serviceData)

        return res.status(201).json(data)

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})
            
        }

  }
}

// Handle getAllServices
export const handleGetAllServices = async (req: Request, res: Response) => {
  try {

        const data = await getAllServices()

        return res.status(200).json(data)

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})

        }

  }

}

// Handle getOneService
export const handleGetOneService = async (req: Request, res: Response) => {
  try {

        const { id } = req.params

        const data = await getOneService(id as string)

        return res.status(200).json(data)

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})

        }

  }
}

// Handle updateService
export const handleUpdateService = async (req: Request, res: Response) => {
  try {

        const { id } = req.params
        const updatedServiceData = req.body

        const data = await updateService(id as string, updatedServiceData)

        return res.status(200).json(data)

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})

        }
  }
  
}

// Handle deleteService
export const handleDeleteService = async (req: Request, res: Response) => {
  try {

        const { id } = req.params

        const data = await deleteService(id as string)

        return res.status(200).json(data)

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})

        }
  }
  
}