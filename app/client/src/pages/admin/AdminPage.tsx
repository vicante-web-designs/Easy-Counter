import { api } from '@/lib/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'

const AdminPage = () => {

  const [ip, setIp] = useState<string>('')
  const [port, setPort] = useState<number>(8000)

  useEffect(() => {
      async function getLocalIPAddress(){
      try {
        const response = await api.get('/api/network/ip')

        setIp(response.data.ip)
        setPort(response.data.port)
      } catch (error) {
        console.error("Submit failed:", error)

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

      getLocalIPAddress()
    },[])


  return (
    <main className='w-full h-full flex flex-col items-center gap-6'>
      <h1 className='text-xl text-center w-fit'>Counters - Open your browsers and go to:</h1>

      <section className='border border-gray-300 bg-gray-200 p-20 rounded-lg'>
        <p className='text-5xl'>
          {
            ip ? `${ip}:${port}` : 'Loading ...'
          }
        </p>
      </section>

      <AdminDashboard />
    </main>
  )
}

export default AdminPage
