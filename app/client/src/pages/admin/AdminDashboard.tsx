import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

type SectionStats = {
  sectionId: string
  sectionName: string
  men: number
  women: number
  children: number
}

const AdminDashboard = () => {
  const [data, setData] = useState<SectionStats[]>([])
  const [currentService, setCurrentService] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/api/churchAttendance')

      setData(res.data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchCurrentService = async() => {
      const res = await api.get('/api/churchService')

      setCurrentService(res.data[0].name)
    }

    fetchCurrentService()
  }, [])
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Attendance Dashboard</h2>
      <h3 className='font-medium text-2xl'>{`Current Service: ${currentService}`}</h3>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Section</TableHead>
            <TableHead>Men</TableHead>
            <TableHead>Women</TableHead>
            <TableHead>Children</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((section) => {
            const total =
              section.men + section.women + section.children

            return (
              <TableRow key={section.sectionId}>
                <TableCell>{section.sectionName}</TableCell>
                <TableCell>{section.men}</TableCell>
                <TableCell>{section.women}</TableCell>
                <TableCell>{section.children}</TableCell>
                <TableCell className="font-bold">{total}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </main>
  )
}

export default AdminDashboard
