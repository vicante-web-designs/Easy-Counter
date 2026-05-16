import express from 'express';
import { handleCreateService, handleGetAllServices, handleGetOneService, handleUpdateService, handleDeleteService, handleToggleServiceActivtion } from '../controllers/churchService.controller.js';

const router = express.Router()

router.get('/', handleGetAllServices)

router.get('/:service_id', handleGetOneService)

router.post('/', handleCreateService)

router.put('/:service_id', handleUpdateService)

router.delete('/:service_id', handleDeleteService)

router.put('/toggleActivation/:service_id', handleToggleServiceActivtion)

export default router