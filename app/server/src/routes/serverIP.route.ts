import os from 'os'
import express from 'express'

const router = express.Router()

function getLocalIP() {
    const interfaces = os.networkInterfaces()
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address
            }
        }
    }
    return 'localhost'
}

router.get('/ip', (req, res) => {
    res.json({ ip: getLocalIP(), port: 8000 })
})


export default router


