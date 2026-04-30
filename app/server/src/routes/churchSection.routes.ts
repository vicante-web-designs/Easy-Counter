import express from 'express';
import { handleCreateChurchAttendance, handleGetAllChurchAttendance, handleGetOneChurchAttendance, handleUpdateChurchAttendance, handleDeleteChurchAttendance } from '../controllers/churchAttendance.controller.js';

const router = express.Router()

router.get('/', handleGetAllChurchAttendance)

router.get('/:id', handleGetOneChurchAttendance)

router.post('/', handleCreateChurchAttendance)

router.put('/:id', handleUpdateChurchAttendance)

router.delete('/:id', handleDeleteChurchAttendance)

export default router