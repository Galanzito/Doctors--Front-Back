import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const Container = styled.div`
    max-width: 50vw;
    margin: 3rem auto;

`;

export const GoBack = styled(ArrowBackIosIcon)`
    cursor: pointer;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-left: 1rem;
    color: #C88F5A;
`;

export const InputsWrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`;

export const ButtonWrapper = styled.div`
    grid-area: 4 / 2;
    margin-top: 2rem;
    justify-self: end;   
`;

export const Button = styled.button`
    width: 170px;
    height: 40px;
    background-color: #212121;
    color: #FFF;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
`;