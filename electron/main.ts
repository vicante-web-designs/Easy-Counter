import { app, BrowserWindow } from 'electron'
import { spawn, ChildProcess } from 'child_process'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

let mainWindow: BrowserWindow | null = null
let serverProcess: ChildProcess | null = null

function startServer() {
    serverProcess = spawn('node', [
        path.join(__dirname, '../app/server/dist/server.js')
    ], {
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
    })

    serverProcess.on('error', (err) => {
        console.error('Failed to start server:', err)
    })
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 900,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        title: 'EasyCounter',
        show: false
    })

    const url = isDev
        ? 'http://localhost:5173'
        : 'http://localhost:5000'

    mainWindow.loadURL(url)

    mainWindow.once('ready-to-show', () => {
        mainWindow?.show()
    })

    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.whenReady().then(() => {
    if (!isDev) {
        startServer()
        setTimeout(createWindow, 2000)
    } else {
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

app.on('before-quit', () => {
    if (serverProcess) {
        serverProcess.kill()
    }
})