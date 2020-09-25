import { BaseDataBase } from "./BaseDataBase";

export class DoctorsDataBase extends BaseDataBase {
    public async createDoctor(
        id: string,
        name: string,
        crm: string,
        tel: string,
        state: string,
        city: string,
        specialties: string
    ): Promise<any> {
        return await super.getConnection().raw(`
            INSERT INTO ${BaseDataBase.DOCTORS_TABLE_NAME} (id, name, crm, tel, state, city, specialties)
            VALUES('${id}', '${name}', '${crm}', '${tel}', '${state}', '${city}', '${specialties}')
        `)
    }

    public async editDoctor(
        id: string,
        name?: string,
        crm?: string,
        tel?: string,
        state?: string,
        city?: string,
        specialties?: string
    ): Promise<any> {
        return await super.getConnection().raw(`
            UPDATE ${BaseDataBase.DOCTORS_TABLE_NAME}
            SET name = '${name}', crm ='${crm}', tel = '${tel}',
            state = '${state}', city = '${city}', specialties = '${specialties}'
            WHERE id = '${id}'
        `)
    }

    public async getAllDoctors(): Promise<any> {
        const result = await super.getConnection().raw(`
            SELECT *               
            FROM ${BaseDataBase.DOCTORS_TABLE_NAME}
        `)

        return result[0]
    }

    public async deleteDoctor(id: string): Promise<void> {
        await super.getConnection().raw(`
            DELETE FROM ${BaseDataBase.DOCTORS_TABLE_NAME} WHERE id = '${id}'
        `)
    }
}