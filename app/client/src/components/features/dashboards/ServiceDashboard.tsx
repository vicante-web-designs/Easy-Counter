import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Service {
    id: string
    name: string,
    is_active: number,
    created_at: string
}

const ServiceDashboard = () => {
    const [serviceData, setServiceData] = useState<Service[]>([])

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const res = await api.get('/api/churchService')

                setServiceData(res.data)
            } catch (error) {

                if(axios.isAxiosError(error)){
                          alert(
                              error?.response?.data?.message ||
                              "Something went wrong"
                          )
                      } else {
                          alert('Something went wrong')
                      }
                  }
        }

        fetchSections()
    }, [])

    console.log(serviceData)
  return (
    <section className='w-[70%] flex flex-col items-center gap-8 border p-2 rounded-md'>
      <h2 className='text-xl font-bold'>Services</h2>

      <div className='w-full flex flex-col gap-2'>
        {
            serviceData.map(service => (
                <div className='flex justify-between items-center border p-2 rounded-md'>
                    <p>
                        {service.name}
                    </p>

                    {
                        service.is_active ? (
                            <Button className='border px-4 py-2 bg-green-200 text-green-700 rounded-md'>
                                Active
                            </Button>
                        ) : (
                            <Button className='border px-4 py-2 bg-red-200 text-red-700 rounded-md'>
                                Inactive
                            </Button>
                        )
                    }
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default ServiceDashboard
