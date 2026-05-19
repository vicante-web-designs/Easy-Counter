import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Field, FieldLabel, FieldError } from '../ui/form/field'
import { Input } from '../ui/form/input'
import axios from 'axios'
import { api } from '@/lib/api'
import { useNavigate } from 'react-router'
import type { Section,  SectionFormProps } from '@/types/sectionTypes'
import { useEffect, useState } from 'react'

const formSchema = z.object({
    name: z.string().min(1, 'Section name is required'),
})

type FormValues = z.infer<typeof formSchema>

const SectionForm = ({ section_id }: SectionFormProps) => {
    const navigate = useNavigate()
    const [existingSection, setExistingSection] = useState<Section | null>(null)

    const isEditMode =  !!existingSection

   const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: ''
        },
    })

    const resetForm = () => {
        reset()
    }

    const onSubmit = async (values: FormValues) => {
        try {

            if(isEditMode && existingSection){
                const { data } = await api.put(`/api/churchSection/${section_id}`, values)

                console.log("Section editted:", data)

            } else {
                const response = await api.post('/api/churchSection', values)

                console.log("Section Created:", response.data)
            }

            resetForm()

            // TODO: Add success message card before navigating to adminPage
            navigate('/adminPage')
            
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

    useEffect(() => {
        if(!section_id) return

        const fetchSection = async () => {
            try {
                const { data } = await api.get(`/api/churchSection/${section_id}`)

                setExistingSection(data)

                reset({
                    name: data.name ?? ''
                })

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

        fetchSection()
    }, [section_id, reset])

  return (
    <main className="w-full max-w-md mx-auto px-4 py-10">

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>

            <Field>
                <FieldLabel>Section Name</FieldLabel>
                <Input placeholder="Input section name" {...register('name')} className='h-12' />
                <FieldError errors={[errors.name]} />
            </Field>


            <Button type='submit' className="h-12 mt-4" disabled={isSubmitting}>
                {
                    isSubmitting ? 'Submitting...' : 'Submit Section Name'
                }
            </Button>
        </form>

        <Button onClick={() => navigate('/adminPage')}>
            Return Back
        </Button>
    </main>
  )
}

export default SectionForm