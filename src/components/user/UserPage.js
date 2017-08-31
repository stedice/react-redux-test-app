import React from 'react';
import UserDetails from './userDetails';
import UserForm from '../../containers/user/userForm';


const User = () => {
  return (
    <div>
      <h1 className="alt-header">User Detail Page</h1>
      <UserDetails/>
      <UserForm />
    </div>
  );
};

export default User;
