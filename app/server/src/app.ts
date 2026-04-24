import express from 'express';
import supabase from './config/supabase.js';
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ItIsWorkingNow' })
})

export default app