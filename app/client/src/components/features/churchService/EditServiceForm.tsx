import { useParams } from 'react-router'
import ServiceForm from '../ServiceForm'

const EditServiceForm = () => {
  const { service_id } =useParams()
  
  return (
    <main>
      <ServiceForm service_id={service_id}  />
    </main>
  )
}

export default EditServiceForm
