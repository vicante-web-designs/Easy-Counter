import { Request, Response } from 'express';
import { createChurchSection, getAllChurchSections, getOneChurchSection, updateChurchSection, deleteChurchSection } from '../services/churchSection.service.js';
import { getIO } from '../sockets/socket.js';

// Handle Create Church Section
export const handleCreateChurchSection = async (req: Request, res: Response) => {
  try {

    const churchSectionData = req.body
    
    const data = await createChurchSection(churchSectionData)
    
    getIO().emit('sections:updated')
    

    return res.status(201).json(data)

  } catch (error) {

    if(error instanceof Error){
      return res.status(500).json({ error: error.message })
    }

  }

}

// Handle Get All Section
export const handleGetAllChurchSection = async (req: Request, res: Response) => {
  try {

      const data = getAllChurchSections()

      return res.status(200).json(data)

  } catch (error) {

      if(error instanceof Error){
        return res.status(500).json({ error: error.message })
      }

    }

}

// Handle Get One Section
export const handleGetOneChurchSection = async (req: Request, res: Response) => {
  try {

      const { sectionID } = req.params
      
      const data = getOneChurchSection(sectionID as string)

      return res.status(200).json(data)

  } catch (error) {

      if(error instanceof Error){
        return res.status(500).json({ error: error.message })
      }

  }

}

// Handle Update Church Section
export const handleUpdateChurchSection = async (req: Request, res: Response) => {
  try {

        const { sectionID } = req.params
        const updatedChurchSectionData = req.body
        
        const data = await updateChurchSection(sectionID as string, updatedChurchSectionData)

        getIO().emit('sections:updated')

        return res.status(200).json(data)

  } catch (error) {

      if(error instanceof Error){
        return res.status(500).json({ error: error.message })
      }

  }

}

// Handle Delete Church Section
export const handleDeleteChurchSection = async (req: Request, res: Response) => {
  try {

      const { sectionID } = req.params

      deleteChurchSection(sectionID as string)

      getIO().emit('sections:updated')

      return res.status(200).json({ message: 'Church Section deleted successfully' })

  } catch (error) {

      if(error instanceof Error){
        return res.status(500).json({ error: error.message })
      }

  }

}