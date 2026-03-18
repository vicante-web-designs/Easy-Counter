import express from 'express'

console.log('file is running')

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})