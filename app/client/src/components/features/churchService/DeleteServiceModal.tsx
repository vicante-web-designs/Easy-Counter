import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import type { deleteModalProps } from '@/types/deleteModalType'
import axios from 'axios'
import { Trash2Icon } from 'lucide-react'

const DeleteServiceModal = ({ id }: deleteModalProps) => {

    const handleDelete = async(id: string) => {
        try {
            const { data } = await api.delete(`/api/churchService/${id}`)

            console.log(data)
        } catch (error) {
            if(axios.isAxiosError(error)){
                    console.log(error.response?.data.error)
                } else {
                    alert('Something went wrong')
                }
            }
        }

  return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
                <Button variant="destructive">
                    Delete
                    <Trash2Icon size={18} color='rgba(255,0,0,0.6)' />
                </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='border-0 min-w-fit bg-bg-main px-16 py-8 gap-16'>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your Section.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete(id as string)}>
                    Yes, Delete this Service
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteServiceModal
