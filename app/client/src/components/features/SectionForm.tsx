import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Field, FieldLabel, FieldError } from '../ui/form/field'
import { Input } from '../ui/form/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/form/select'
import axios from 'axios'
import { api } from '@/lib/api'

const formSchema = z.object({
    section: z.string().min(1, 'Section name is required'),
    men: z.number().min(0),
    women: z.number().min(0),
    children: z.number().min(0),
    counterName: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

const SectionForm = () => {

   const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, control, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        section: '',
        men: 0,
        women: 0,
        children: 0,
        counterName: '',
        },
    })

    const selectedSection = useWatch({control, name: 'section' })

    const resetForm = () => {
        reset()
    }

    const onSubmit = async (values: FormValues) => {
        try {
            const response = await api.post('/api/churchAttendance', values)

            console.log("Success:", response.data)

            resetForm()

            alert("Submitted successfully!")

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

  return (
    <main className="w-full max-w-md mx-auto px-4 py-10">
      <article className='text-center flex flex-col items-center gap-2 mb-12'>
            <h2 className="text-3xl font-semibold">Submit Attendance</h2>
            <p className='max-w-6xl text-muted-foreground'>
                Enter the name and number of people in your section
            </p>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>

            {/* SECTION */}
            <Field>
                <FieldLabel>Your Section</FieldLabel>
                <Select
                    onValueChange={(val) => setValue('section', val )}
                    value={selectedSection}
                >
                    <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select section" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="section-A">Section A</SelectItem>
                        <SelectItem value="section-B">Section B</SelectItem>
                    </SelectContent>
                </Select>
                <FieldError errors={[errors.section]} />
            </Field>

            {/* MEN */}
            <Field>
                <FieldLabel>Men</FieldLabel>
                <Input type="number" min={0} {...register('men', { valueAsNumber: true })} className='h-12' />
                <FieldError errors={[errors.men]} />
            </Field>

            {/* WOMEN */}
            <Field>
                <FieldLabel>Women</FieldLabel>
                <Input type="number" min={0} {...register('women', { valueAsNumber: true })} className='h-12' />
                <FieldError errors={[errors.women]} />
            </Field>

            {/* CHILDREN */}
            <Field>
                <FieldLabel>Children</FieldLabel>
                <Input type="number" min={0} {...register('children', { valueAsNumber: true })} className='h-12' />
                <FieldError errors={[errors.children]} />
            </Field>

            <Field>
                <FieldLabel>Counter Name</FieldLabel>
                <Input placeholder="Input your name" {...register('counterName')} className='h-12' />
                <FieldError errors={[errors.counterName]} />
            </Field>


            <Button type='submit' className="h-12 mt-4" disabled={isSubmitting}>
                {
                    isSubmitting ? 'Submitting...' : 'Submit Count'
                }
            </Button>
        </form>
    </main>
  )
}

export default SectionForm