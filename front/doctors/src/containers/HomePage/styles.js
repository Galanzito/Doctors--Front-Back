import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { Paper, Input } from '@material-ui/core';
import Loader from 'react-loader-spinner';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
`;

export const Loading = styled(Loader)`
    position: absolute;
    top: 20%;
    left: 45%;
`;

export const CardWrapper = styled(Paper)`
    display:flex;
    flex-direction: column; 
`;

export const CardActions = styled.div`
    display: flex;
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
`;

export const CardMedia = styled.div`
    max-height: 250px;
    margin-left: 1rem;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:1rem;
    margin: 2rem 1rem;
    max-width:100vw;
`;

export const Delete = styled(DeleteForeverIcon)`
    cursor: pointer;
`;

export const Edit = styled(EditIcon)`
    cursor: pointer;
`;

export const InputSearch = styled(Input)`
  width: 15%;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin:0 16px;
`;