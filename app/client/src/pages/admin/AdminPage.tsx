import { api } from '@/lib/api'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
    <main>
      <h1>Counters - Open your browsers and go to:</h1>

      <p>
        {
          ip ? `${ip}:${port}` : 'Loading ...'
        }
      </p>
    </main>
  )
}

export default AdminPage
