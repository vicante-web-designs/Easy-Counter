import express from 'express';
import supabase from './config/supabase.js';
const app = express();

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

export default app