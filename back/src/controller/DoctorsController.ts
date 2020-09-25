import { Request, Response } from 'express'
import { DoctorsBusiness } from "../business/DoctorsBusiness";
import { DoctorsDataBase } from "../data/DoctorsDataBase";
import { IdGenerator } from "../services/idGenerator";

export class DoctorsController {
    private static DoctorsBusiness = new DoctorsBusiness(
        new DoctorsDataBase(),
        new IdGenerator(),
    )

    async createDoctor(req: Request, res: Response) {
        const { name, crm, tel, state, city, specialties } = req.body;
        try {

            if (!name || !crm || !tel || !state || !city || !specialties) {
                throw new Error("Missing Input")
            }

            const result = await DoctorsController.DoctorsBusiness.createDoctor(
                name,
                crm,
                tel,
                state,
                city,
                specialties
            )
            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        } finally {
            await DoctorsDataBase.destroyConnection();
        }
    }

    async editDoctor(req: Request, res: Response) {
        const { name, crm, tel, state, city, specialties } = req.body;
        const id = req.query.id as string;

        try {

            if (!id) {
                throw new Error("Missing ID")
            }

            const result = await DoctorsController.DoctorsBusiness.editDoctor(
                id,
                name,
                crm,
                tel,
                state,
                city,
                specialties
            )

            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        } finally {
            await DoctorsDataBase.destroyConnection();
        }
    }

    async deleteDoctor(req: Request, res: Response) {
        const id = req.query.id as string
        try {

            if (!id) {
                throw new Error("Missing ID")
            }

            const result = await DoctorsController.DoctorsBusiness.deleteDoctor(id);

            res.status(200).send(result)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        } finally {
            await DoctorsDataBase.destroyConnection();
        }
    }

    async allDoctors(req: Request, res: Response) {
        try {
            const allDoctors = await DoctorsController.DoctorsBusiness.getAllDoctors()

            res.status(200).send(allDoctors)
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        } finally {
            await DoctorsDataBase.destroyConnection();
        }

    }
}