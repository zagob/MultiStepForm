import React from 'react';

import { Input } from '../../../components/Input';

// import { Container } from './styles';

function Profile() {
  return (
      <>
        <h1>Profile</h1>

        <Input name="nome" label="Nome" placeholder="name" />
        <Input name="age" placeholder="age" />
      </>
  );
}

export default Profile;