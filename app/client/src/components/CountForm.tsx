import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const formSchema = z.object({
    section: z.string().min(1, 'Section name is required'),
    men: z.coerce.number().min(0),
    women: z.coerce.number().min(0),
    children: z.coerce.number().min(0),
    counterName: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

const CountForm = () => {

   const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        section: '',
        men: 0,
        women: 0,
        children: 0,
        counterName: '',
        },
    })


    const onSubmit = (values: FormValues) => {
        console.log(values)
    }

  return (
    <main className="w-full max-w-md mx-auto px-4 py-10">
      <article className='text-center flex flex-col items-center gap-2 mb-12'>
            <h2 className="text-3xl font-semibold">Submit Attendance</h2>
            <p className='max-w-6xl text-muted-foreground'>
                Enter the name and number of people in your section
            </p>
        </article>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">

                {/* SECTION */}

                <FormField
                    control={form.control}
                    name="section"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Your Section</FormLabel>

                        <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        >
                        <FormControl>
                            <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your section" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            <SelectItem value="main-hall">
                            Main Hall
                            </SelectItem>

                            <SelectItem value="balcony">
                            Balcony
                            </SelectItem>

                            <SelectItem value="children-wing">
                            Children Wing
                            </SelectItem>
                        </SelectContent>
                        </Select>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* MEN */}

                <FormField
                    control={form.control}
                    name="men"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Men</FormLabel>

                        <FormControl>
                        <Input
                            type="number"
                            min={0}
                            className="h-12"
                            {...field}
                        />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* WOMEN */}

                <FormField
                    control={form.control}
                    name="women"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Women</FormLabel>

                        <FormControl>
                        <Input
                            type="number"
                            min={0}
                            className="h-12"
                            {...field}
                        />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* CHILDREN */}

                <FormField
                    control={form.control}
                    name="children"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Children</FormLabel>

                        <FormControl>
                        <Input
                            type="number"
                            min={0}
                            className="h-12"
                            {...field}
                        />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* OPTIONAL COUNTER NAME */}

                <FormField
                    control={form.control}
                    name="counterName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                        Counter Name (Optional)
                        </FormLabel>

                        <FormControl>
                        <Input
                            placeholder="e.g. John"
                            className="h-12"
                            {...field}
                        />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="h-12 mt-4"
                >
                    Submit Count
                </Button>

            </form>
        </Form>
    </main>
  )
}

export default CountForm
