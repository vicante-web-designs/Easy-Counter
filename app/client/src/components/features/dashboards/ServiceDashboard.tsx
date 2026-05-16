import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

interface Service {
    id: string
    name: string,
    is_active: number,
    created_at: string
}

const ServiceDashboard = () => {
    const navigate = useNavigate()
    const [serviceData, setServiceData] = useState<Service[]>([])

    const fetchServices = async () => {
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

    const toggleActivation = async(service_id: string) => {
        try {

            const res = await api.put(`/api/churchService/toggleActivation/${service_id}`)

            console.log(res.data)

            fetchServices()
            
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

    useEffect(() => {
        const loadServices = async () => {

            const res = await api.get('/api/churchService')

            setServiceData(res.data)

        }

        loadServices()
    }, [])

  return (
    <section className='w-[70%] flex flex-col items-center gap-8 border p-2 rounded-md'>
      <h2 className='text-xl font-bold'>Services</h2>

      <div className='w-full flex flex-col gap-2'>
        {
            serviceData.map((service) => (
                <div key={service.id} className={`flex justify-between items-center border p-2 rounded-md ${
                    service.is_active ? (
                        'border-green-200 bg-green-100'
                    ) : (
                        'border-red-200 bg-red-100'
                    )
                }`}>
                    <p>
                        {service.name}
                    </p>

                    {
                        service.is_active ? (
                            <Button onClick={() => toggleActivation(service.id)} className='border px-4 py-2 bg-green-200 text-green-700 rounded-md'>
                                De-activate
                            </Button>
                        ) : (
                            <Button onClick={() => toggleActivation(service.id)} className='border px-4 py-2 rounded-md'>
                                Activate
                            </Button>
                        )
                    }
                </div>
            ))
        }
      </div>

      <Button onClick={() => navigate('/createService')}>Add Service</Button>
    </section>
  )
}

export default ServiceDashboard
