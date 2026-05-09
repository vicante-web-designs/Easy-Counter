import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/form/input'
import { Field, FieldLabel, FieldError } from '@/components/ui/form/field'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { api } from '@/lib/api'

interface IPFormProps {
    setIsConnected: (arg1: boolean) => void
}

const IpForm = ({ setIsConnected }: IPFormProps) => {

    const formSchema = z.object({
        serverIP: z.string().min(1, 'Server IP address is required')
    })

    type FormValues = z.infer<typeof formSchema>

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
            resolver: zodResolver(formSchema),
            defaultValues: {
            serverIP: ''
            },
        })
    const handleReset = () => reset()

    const onSubmit = async (values: FormValues) => {
        try {
        localStorage.setItem('ServerIP', values.serverIP)
        
        await api.get(`http://${values.serverIP}:8000/health`)

        // console.log(`Successfull connection: ${response}`)

        handleReset()
        setIsConnected(true)
        } catch (error) {
            console.error("Submit failed:", error)

            if(axios.isAxiosError(error)){
                alert(
                    'Could not connect to server. Check the IP address and try again.'
                )
            } else {
                alert('Something went wrong')
            }
          }
        }
  return (
    <section className='flex flex-col gap-20'>
        <article className='text-center'>
            <h1 className='text-4xl font-bold'>Input IP address</h1>
            <p>Type in the IP address of the device used as the server</p>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <Field>
            <FieldLabel>
                Server IP
            </FieldLabel>
            <Input placeholder="Input IP address" {...register('serverIP')} className='h-12' />
            <FieldError errors={[errors.serverIP]} />
            </Field>

            <Button  type='submit' className="h-12 mt-4" disabled={isSubmitting}>
            {
                isSubmitting ? 'Connecting...' : 'Connect to Server'
            }
            </Button>
        </form>
    </section>
  )
}

export default IpForm
