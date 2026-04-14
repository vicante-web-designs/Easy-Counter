import dotenv from 'dotenv'
dotenv.config({ path: './app/server/.env' })

import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ItIsWorkingNow' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})