import React from 'react';
import UserDetails from '../../containers/userDetails';
import UserForm from '../../containers/userForm';


const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      <UserDetails/>
      <UserForm />
    </div>
  );
};

export default User;
