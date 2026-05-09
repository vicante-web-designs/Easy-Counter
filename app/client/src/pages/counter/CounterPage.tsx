import AttendanceForm from '@/components/features/AttendanceForm'
import IpForm from '@/components/features/IpForm'
import { useState } from 'react'

const CounterPage = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false) //TODO: Store isConnected state in redux or localStorage

  return (
    <main className='w-full max-w-md mx-auto px-4 py-10'>
      {
        isConnected ? (
          <section>
            <h1>Service Name</h1>
            <p>Service Date</p>
            <p>Live counting session</p>

            <AttendanceForm />
          </section>
        ) : (
          <IpForm setIsConnected={setIsConnected}/>
        )
      }
    </main>
  )
}

export default CounterPage
