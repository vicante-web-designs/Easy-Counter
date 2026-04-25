/// <reference types="jest" />

jest.mock('../../config/supabase', () => ({
  __esModule: true,
  default: {
    from: jest.fn()
  }
}))

import supabase from '../../config/supabase';
import { createService, getAllServices, getOneService, updateService, deleteService } from '../../services/service.service';


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
                    data: mockServices,
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
                    data: null,
                    error: { message: "Something went wrong" }
                })
            })
        })

        await expect(getAllServices()).rejects.toThrow('Something went wrong')
      })

    })
})
