import { Button } from '@/components/ui/button'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl text-center font-bold'>
        LFC Easy Counter
      </h1>

      <h2>
        Choose your job
      </h2>

      <div>
        <Button> I'm a Counter </Button>
        <Button> Admin Dashboard </Button>
      </div>
    </div>
  )
}

export default HomePage
