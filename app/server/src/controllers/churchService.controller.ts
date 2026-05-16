import { Request, Response } from 'express';
import { createService, getAllServices, getOneService, updateService, deleteService, toggleServiceActivation } from '../services/churchService.service.js';

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

        const { serviceID } = req.params

        const data = await getOneService(serviceID as string)

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

        const { serviceID } = req.params
        const updatedServiceData = req.body

        const data = await updateService(serviceID as string, updatedServiceData)

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

        const { serviceID } = req.params

        await deleteService(serviceID as string)

        return res.status(200).json({ message: "Service deleted successfully" }); 

  } catch (error) {

        if(error instanceof Error){

            return res.status(500).json({error: error.message})

        }
  }
  
}

export const handleToggleServiceActivtion = async (req: Request, res: Response) => {
  try {
    const { service_id } = req.params

    await toggleServiceActivation(service_id as string)

    return res.status(200).json({ message: 'Service activation toggled'})
    
  } catch (error) {

    if(error instanceof Error){

       return res.status(500).json({error: error.message})

      }
  }
}