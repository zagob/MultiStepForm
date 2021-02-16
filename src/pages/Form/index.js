import React from 'react';
import MultiStep from '../../components/Multistep';

import Profile from './Profile';
import Address from './Address';

function Form() {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }
  return (
    <form onSubmit={handleSubmit}>
      <MultiStep>
            <Profile />

            <Address />

            <button type="submit">Send</button>
      </MultiStep>
    </form>
  );
}

export default Form;