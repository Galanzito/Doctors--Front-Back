import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getDoctors } from '../../actions/doctors';
import Header from '../../components/Header';
import CardsDoctors from './CardsDoctors';
import { Container, Loading, InputSearch, Wrapper } from './styles';
import { Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { routes } from '../Router';

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            filter: ''
        }
    }

    componentDidMount() {
        this.props.getDoctors();
    }

    handleSearch(event) {
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        let filteredDocs = this.props.docsList.filter(
            (doc) => {
                return doc.crm.startsWith(this.state.filter);
            }
        )
        return (
            <>
                <Header />
                <Wrapper>
                    <InputSearch
                        id="input-with-icon-adornment"
                        type="text"
                        onChange={this.handleSearch.bind(this)}
                        placeholder="Digite um CRM"
                        value={this.state.filter || ''}
                        startAdornment={(
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )}
                    />
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => this.props.goTo(routes.doctorsForm)}
                    >
                        Criar Médico
                </Button>
                </Wrapper>
                <Container>
                    {this.props.docsList.length === 0 ?
                        <Loading
                            type="Oval"
                            color="#C88F5A"
                            height={100}
                            width={100}
                        /> : filteredDocs.map((doctor) => (
                            <CardsDoctors doctor={doctor} key={doctor.id}/>
                        ))}
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    docsList: state.doctors.docsList
});

const mapDispatchToProps = (dispatch) => ({
    goTo: (url) => dispatch(push(url)),
    getDoctors: () => dispatch(getDoctors())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);