import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: 250,
    },
  },
};

const specialties = [
  'Alergologia',
  'Angiologia',
  'Buco Maxilo',
  'Cardiologia Clínica',
  'Cardiologia Infantil',
  'Cirurgia Cabeça e Pescoço',
  'Cirurgia Cardíaca',
  'Cirurgia de Torax',
  'Cirurgia Geral',
  'Cirurgia Pediátrica',
  'Cirurgia Plástica',
  'Cirurgia Torácica',
  'Cirurgia Vascular',
  'Clínica Médica'
];

function getStyles(specialties, specialtiesName, theme) {
  return {
    fontWeight:
      specialtiesName.indexOf(specialties) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SpecialtiesSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [specialtie, setSpecialtie] = React.useState([]);

  const handleChange = (event) => {
    setSpecialtie(event.target.value);
    props.specialties(event.target.value);
  };
  
  return (
    <div>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={specialtie}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Selecione...</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Especialidades</em>
          </MenuItem>
          {specialties.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, specialtie, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}