import AttendanceForm from '@/components/features/AttendanceForm'

const CounterPage = () => {

  return (
    <main className='w-full max-w-md mx-auto px-4 py-10'>
          <section>
            <h1>Service Name</h1>
            <p>Service Date</p>
            <p>Live counting session</p>

            <AttendanceForm />
          </section>
    </main>
  )
}

export default CounterPage
