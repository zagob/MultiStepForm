import React from 'react';

import CheckboxInput from '../../../components/Checkbox';

// import { Container } from './styles';

function Hobbies() {

  const checkboxOptions = [
    { id: 'academia', value: 'academia', label: 'Academia' },
    { id: 'netflix', value: 'netflix', label: 'Netflix' },
  ];
  return (
      <>
        <h1>Hobbies</h1>
        
        <CheckboxInput name="hobbies" options={checkboxOptions} label="Academia" />
      </>
  );
}

export default Hobbies;