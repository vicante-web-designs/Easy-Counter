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
  
    // First Test => getAllServices()
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

    // Second Test => getOneService()
    describe('getOneService', () => {

        it('Should return one service', async() => {
            const mockService = { id: "abc", name: "First Service", date: "2025-04-20", is_active: false }

            mockSupabase.from = jest.fn().mockReturnValue({
                select: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        single: jest.fn().mockResolvedValue({
                            data: mockService,
                            error: null
                        })
                    })
                })
            })

            const result = await getOneService('abc')

            expect(result).toEqual(mockService)
        })

        it('Should throw an error when supabase returns an error', async() => {
            mockSupabase.from = jest.fn().mockReturnValue({
                select: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        single: jest.fn().mockResolvedValue({
                            data: null,
                            error: { message: "Something went wrong"}
                        })
                    })
                })
            })

            await expect(getOneService('abc')).rejects.toThrow('Something went wrong')
        })
    })

    // Third Test => updateService()
    describe('updateService', () => {

        it('Should update the proper service', async () => {
            const updatedMockService = { id: "abc", name: "First Service", date: "2025-04-20", is_active: false }

            mockSupabase.from = jest.fn().mockReturnValue({
                update: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        select: jest.fn().mockReturnValue({
                            single: jest.fn().mockResolvedValue({
                                data: updatedMockService,
                                error: null
                            })
                        })
                    })
                })
            })

            const result = await updateService("abc", { id: "abc", name: "First Service", date: "2025-04-20", is_active: false })

            expect(result).toEqual(updatedMockService)
        })

        it('Should throw an error when supabase returns an error', async() => {
            mockSupabase.from = jest.fn().mockReturnValue({
                update: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        select: jest.fn().mockReturnValue({
                            single: jest.fn().mockResolvedValue({
                                data: null,
                                error: { message: 'Service could not be updated'}
                            })
                        })
                    })
                })
            })

            await expect(updateService('abc', { id: "abc", name: "First Service", date: "2025-04-20", is_active: false })).rejects.toThrow('Service could not be updated')
        })

    })

    // Fourth Test => deleteService()
    describe('deleteService', () => {

        it('Should delete the proper service', async () => {
            const deletedMockService = { id: "abc", name: "First Service", date: "2025-04-20", is_active: false }

            mockSupabase.from = jest.fn().mockReturnValue({
                delete: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        select: jest.fn().mockReturnValue({
                            single: jest.fn().mockResolvedValue({
                                data: deletedMockService,
                                error: null
                            })
                        })
                    })
                })
            })

            const result = await deleteService("abc")

            expect(result).toEqual(deletedMockService)
        })

        it('Should throw an error when supabase returns an error', async() => {
            mockSupabase.from = jest.fn().mockReturnValue({
                delete: jest.fn().mockReturnValue({
                    eq: jest.fn().mockReturnValue({
                        select: jest.fn().mockReturnValue({
                            single: jest.fn().mockResolvedValue({
                                data: null,
                                error: { message: 'Service could not be deleted'}
                            })
                        })
                    })
                })
            })

            await expect(deleteService('abc')).rejects.toThrow('Service could not be deleted')
        })

    })

    // Fifth test => createService()
    describe('createService', () => {

        it('Should create a service', async() => {
            const createdService = { name: "First Service", date: "2025-04-20", is_active: false }

            mockSupabase.from = jest.fn().mockReturnValue({
                insert: jest.fn().mockReturnValue({
                    select: jest.fn().mockResolvedValue({
                                data: createdService,
                                error: null
                            })
                })
            })

            const result = await createService({ name: "First Service", date: "2025-04-20", is_active: false })

            expect(result).toEqual(createdService)

        })
    })
})
