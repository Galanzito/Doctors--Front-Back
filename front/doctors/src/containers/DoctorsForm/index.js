import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../../containers/Router';
import Header from '../../components/Header';
import { Container, InputsWrapper, TitleWrapper, Button, ButtonWrapper, Title, GoBack } from './styles';
import { TextField } from '@material-ui/core';
import SpecialtiesSelect from './SpecialtiesSelect';
import { createDoctor, editDoctor } from '../../actions/doctors';
import { setUpdate } from '../../actions/doctors';

const createInputs = [
    { name: "name", type: "text", label: "Nome" },
    { name: "crm", type: "text", label: "CRM", pattern: "[0-9]{4,}", title: "Somente Números" },
    { name: "city", type: "text", label: "Cidade" },
    { name: "state", type: "text", label: "Estado" },
    { name: "tel", type: "tel", label: "Telefone - 11 98890 0998", title: "Digite um telefone válido- xx xxxxx xxxx" }
];

class DoctorsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctor: {
                name: '',
                crm: '',
                city: '',
                state: '',
                tel: '',
                specialties: [""]
            },

        }
    }

    componentDidMount(){
        const doctor = this.props.doctor
        if(this.props.update){
            this.setState({
                doctor
            })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            doctor: {
                ...this.state.doctor,
                [name]: value
            }
        })
    };

    setSpecialties(specialties) {
        this.setState({
            doctor: {
                ...this.state.doctor,
                specialties
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.doctor.specialties.length < 2) {
            alert('Selecione pelo menos 2 Especialidades')
        } else {
            this.props.update ? this.props.editDoctor(this.state.doctor, this.props.doctorId) :
                this.props.createDoctor(this.state.doctor);
            this.setState({
                doctor: {
                    name: '',
                    crm: '',
                    city: '',
                    state: '',
                    tel: '',
                    specialties: [""]
                }
            })
        }
    }

    handleGoBack = () => {
        this.props.setUpdate(false)
        this.props.goTo(routes.home)
    }

    render() {
        return (
            <>
                <Header />
                <Container>
                    <TitleWrapper>
                        <GoBack color={"primary"} onClick={this.handleGoBack} />
                        {this.props.update ? <Title>Editar Médico</Title> : <Title>Criar Médico</Title>}
                    </TitleWrapper>
                    <InputsWrapper onSubmit={this.handleSubmit}>
                        {createInputs.map(input => (
                            <TextField id="outlined-basic" label={input.label} variant="outlined"
                                key={input.id}
                                name={input.name}
                                type={input.type}
                                value={this.state.doctor[input.name] || ''}
                                required
                                onChange={this.handleInputChange}
                                inputProps={{
                                    pattern: input.pattern,
                                    title: input.title
                                }}
                            />
                        ))}
                        <SpecialtiesSelect specialties={(specialties) => this.setSpecialties(specialties)} />
                        <ButtonWrapper>
                            <Button type="submit">Salvar</Button>
                        </ButtonWrapper>
                    </InputsWrapper>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    doctorId: state.doctors.doctorId,
    doctor: state.doctors.doctor,
    update: state.doctors.update,
});

const mapDispatchToProps = (dispatch) => ({
    goTo: (url) => dispatch(push(url)),
    createDoctor: (doctor) => dispatch(createDoctor(doctor)),
    editDoctor: (doctor, doctorId) => dispatch(editDoctor(doctor, doctorId)),
    setUpdate: (value) => dispatch(setUpdate(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsForm);