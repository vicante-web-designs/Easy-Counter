import { useParams } from 'react-router'
import SectionForm from '../SectionForm'

const EditSectionForm = () => {
  const { section_id } =useParams()
  
  return (
    <main>
      <SectionForm section_id={section_id}  />
    </main>
  )
}

export default EditSectionForm
