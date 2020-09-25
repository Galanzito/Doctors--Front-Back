import express from 'express';
import { DoctorsController } from '../controller/DoctorsController';

export const doctorsRouter = express.Router();

doctorsRouter.get('/all', new DoctorsController().allDoctors);

doctorsRouter.put('/edit', new DoctorsController().editDoctor);

doctorsRouter.post('/create', new DoctorsController().createDoctor);

doctorsRouter.delete('/delete', new DoctorsController().deleteDoctor);