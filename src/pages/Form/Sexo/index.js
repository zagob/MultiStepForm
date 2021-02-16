import React, { useState } from 'react';
import Radio from '../../../components/InputRadio';

// import { Container } from './styles';

function Sexo() {
    const [gender, setGender] = useState('');
  return (
      <>
        <h1>Gender</h1>

        <Radio
            name="sex"
            options={
                [
                { id: "M", label: "Male" }, 
                { id: "F", label: "Female" },
            ]}
            onChange={() => {
                setGender()
            }}
            />

            {gender.id === "M" && (
                <h1>Olá</h1>
            )}
      </>
  );
}

export default Sexo;