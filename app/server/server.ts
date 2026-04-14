import dotenv from 'dotenv'
dotenv.config({ path: './app/server/.env' })
import supabase from './src/config/supabase.ts'
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ItIsWorkingNow' })
})

async function testConnection() {
    const { data, error } = await supabase.from('attendance_submissions').select('*').limit(1)

  if (error) {
    console.log('❌ Connection failed:', error.message)
  } else {
    console.log('✅ Supabase connected')
  }
}

testConnection()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})