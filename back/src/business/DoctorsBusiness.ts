import { DoctorsDataBase } from "../data/DoctorsDataBase";
import { IdGenerator } from "../services/idGenerator";

export class DoctorsBusiness {
    constructor(
        private doctorsDatabase: DoctorsDataBase,
        private idGenerator: IdGenerator
    ) { }

    public async createDoctor(
        name: string,
        crm: string,
        tel: string,
        state: string,
        city: string,
        specialties: string
    ) {
        const id = this.idGenerator.generate();

        await this.doctorsDatabase.createDoctor(
            id, name, crm, tel, state, city, specialties
        )

        return ("Doutor Criado com Sucesso!")
    }

    public async editDoctor(
        id: string,
        name?: string,
        crm?: string,
        tel?: string,
        state?: string,
        city?: string,
        specialties?: string
    ) {

        await this.doctorsDatabase.editDoctor(
            id, name, crm, tel, state, city, specialties
        )

        return ("Doutor Editado com Sucesso!")
    }

    public async deleteDoctor(id: string) {
        await this.doctorsDatabase.deleteDoctor(id)

        return ("Doutor Deletado com Sucesso!")
    }

    public async getAllDoctors() {
        return await this.doctorsDatabase.getAllDoctors();
    }
}