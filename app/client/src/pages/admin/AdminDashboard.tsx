import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useActiveService } from '@/hooks/useActiveService'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'
import { socket } from '@/lib/socket'

type SectionStats = {
  section_id: string
  section_name: string
  men: number
  women: number
  children: number
  counter_name?: string
}

const AdminDashboard = () => {
  const [data, setData] = useState<SectionStats[]>([])
  const { activeService } = useActiveService()

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/churchAttendance')

      setData(res.data)
    }
    
    fetchData()

    socket.on('attendance:updated', fetchData)

    return () => {
      socket.off('attendance:updated', fetchData)
    }
  }, [])

  console.log(data)

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Attendance Dashboard</h2>
      <h3 className='font-medium text-2xl'>{`Current Service: ${activeService?.name}`}</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Counter's Name</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Men</TableHead>
            <TableHead>Women</TableHead>
            <TableHead>Children</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
              <TableRow>
                  <TableCell colSpan={6} className='text-center text-muted-foreground py-10'>
                      Waiting for counters to submit...
                  </TableCell>
              </TableRow>
          ) : (
              data.map((section) => {
                  const total = section.men + section.women + section.children
                  return (
                      <TableRow key={section.section_id}>
                          <TableCell>{section.counter_name ?? '—'}</TableCell>
                          <TableCell>{section.section_name}</TableCell>
                          <TableCell>{section.men}</TableCell>
                          <TableCell>{section.women}</TableCell>
                          <TableCell>{section.children}</TableCell>
                          <TableCell className="font-bold">{total}</TableCell>
                      </TableRow>
                  )
              })
          )}
      </TableBody>
      </Table>
    </main>
  )
}

export default AdminDashboard
