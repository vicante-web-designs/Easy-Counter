jest.mock('../../config/supabase.ts')

import supabase from '../../config/supabase.js';
import { createService, getAllServices, getOneService, updateService, deleteService } from '../../services/service.service.js';


const mockSupabase = supabase as any

describe('ServiceData Service', () => {
  
    describe('getAllServices', () => {

      it('should return all services', async () => {

        const mockServices = [
            { id: "abc", name: "First Service", date: "2025-04-20", is_active: false },
            { id: "xyz", name: "Second Service", date: "2025-04-20", is_active: true },
        ]

        mockSupabase.from = jest.fn().mockReturnValue({
            select: jest.fn().mockReturnValue({
                order: jest.fn().mockResolvedValue({
                    date: mockServices,
                    error: null
                })
            })
        })

        const result = await getAllServices()

        expect(result).toEqual(mockServices)
      })

      it('Should throw an error when Supabase returns an error', async () => {

        mockSupabase.from = jest.fn().mockReturnValue({
            select: jest.fn().mockReturnValue({
                order: jest.fn().mockResolvedValue({
                    date: null,
                    error: { message: "Something went wrong" }
                })
            })
        })

        await expect(getAllServices()).rejects.toThrow('Something went wrong')
      })

    })
})
