import React, { useRef } from 'react';
import MultiStep from '../../components/Multistep';

import { Form as Formulario } from '@unform/web';

import Profile from './Profile';
import Hobbies from './Hobbies';
import Sexo from './Sexo';

function Form() {
    const formRef = useRef();
    const handleSubmit = (data) => {
        // event.preventDefault()
        console.log(data)
        console.log(data.sex)
    }
  return (
    <Formulario ref={formRef} onSubmit={handleSubmit} initialData={{ sex: "M" }}>
      <MultiStep>
            <Profile />

            <Hobbies />

            <Sexo />

            <button type="submit">Send</button>
      </MultiStep>
    </Formulario>
  );
}

export default Form;