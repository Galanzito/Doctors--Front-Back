import axios from 'axios';
import { push } from 'connected-react-router';

const baseUrl = "https://o8tqga4ygc.execute-api.us-east-1.amazonaws.com/v1/doctors";

export const getDoctors = () => async(dispatch) => {
    try{
        const response = await axios.get(`${baseUrl}/all`);

        const setDoctors = (docs) => ({
            type: 'SET_DOCTORS',
            payload: {
                docsList: docs
            }
        })

        dispatch(setDoctors(response.data));
    }catch(err){
        console.error(err.message);
        alert('Erro ao buscar lista de Médicos')
    }
}

export const createDoctor = (doctor) => async(dispatch) => {
    try{
        await axios.post(`${baseUrl}/create`, {
            "name": doctor.name,
            "crm": doctor.crm,
            "tel": doctor.tel,
            "city": doctor.city,
            "state": doctor.state,
            "specialties": doctor.specialties
        })

        alert('Médico Criado com Sucesso!')
        dispatch(push('/'))

    }catch(err){
        console.error(err.message);
        alert('Erro ao criar Médico')
    }
}

export const deleteDoctor = (id) => async(dispatch) => {
    try{
        await axios.delete(`${baseUrl}/delete`,{
            params:{
                id
            }
        });

        dispatch(getDoctors());
    }catch(err){
        console.error(err.message);
        alert('Algo deu errado');
    }
}

export const editDoctor = (doctor, id) => async(dispatch) => {
    try{
        await axios.put(`${baseUrl}/edit`,{
            "name": doctor.name,
            "crm": doctor.crm,
            "tel": doctor.tel,
            "city": doctor.city,
            "state": doctor.state,
            "specialties": doctor.specialties
        },{
            params:{
                id
            }
        })

        alert('Médico Atualizado com Sucesso')
        dispatch(push('/'))
        dispatch(setUpdate(false))

    }catch(err){
        console.error(err.message);
        alert('Algo deu Errado')
    }
}

export const setDoctorId = (doctorId) => ({
    type: 'SET_DOCTOR_ID',
    payload: {
        doctorId
    }
})

export const setUpdate = (value) => ({
    type: 'SET_UPDATE',
    payload: {
        value
    }
})

export const setDoctor = (doctor) => ({
    type: 'SET_DOCTOR',
    payload: {
        doctor
    }
})