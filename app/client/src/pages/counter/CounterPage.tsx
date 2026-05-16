import AttendanceForm from '@/components/features/AttendanceForm'
import { useActiveService } from '@/hooks/useActiveService'
import { formatDate } from '@/utils/formatDate'

const CounterPage = () => {

  const { activeService, loading } = useActiveService()

  if (loading) {
    return <p>Loading...</p>
  }

  if (!activeService) {
    return <p>No active service found</p>
  }

  return (
    <main className='w-full max-w-md mx-auto px-4 py-10'>
          <section>
            <h1>{`Current Service: ${activeService?.name}`}</h1>
            <p>{`Service created at: ${formatDate(activeService.created_at)}`}</p>

            <AttendanceForm />
          </section>
    </main>
  )
}

export default CounterPage
