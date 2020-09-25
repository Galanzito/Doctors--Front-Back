import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import { CardActions, CardWrapper, Edit, Delete, CardMedia } from './styles';
import { deleteDoctor, setDoctor, setDoctorId, setUpdate } from '../../actions/doctors'

function CardsDoctors(props) {
    const { doctor } = props;

    const handleEditDoctor = (doctor,doctorId) => {
        props.setDoctorId(doctorId);
        props.setDoctor(doctor)
        props.setUpdate(true);
        props.goTo(routes.doctorsForm);
    };

    const handleDeleteDoctor = (doctorId) => {
        const id = doctorId
        const confirm = window.confirm("Quer mesmo deletar esse médico?")
        if(confirm){
            props.deleteDoctor(id)
        }
    }

    return (
        <CardWrapper>
            <CardMedia>
                <h4>Médico</h4>
                <p>{doctor.name}</p>
                <h5>CRM:{doctor.crm}</h5>
                <p>{doctor.city} / {doctor.state}</p>
                <h5>Especialidades: {doctor.specialties}</h5>
                <p>Telefone: {doctor.tel}</p>
            </CardMedia>
            <CardActions>
                <Edit onClick={() => handleEditDoctor(doctor,doctor.id)} />
                <Delete onClick={() => handleDeleteDoctor(doctor.id)}/>
            </CardActions>
        </CardWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        goTo: (url) => dispatch(push(url)),
        setDoctorId: (doctorId) => dispatch(setDoctorId(doctorId)),
        setUpdate: (value) => dispatch(setUpdate(value)),
        setDoctor: (doctor) => dispatch(setDoctor(doctor)),
        deleteDoctor: (doctorId) => dispatch(deleteDoctor(doctorId))
    }
}

export default connect(null, mapDispatchToProps)(CardsDoctors);