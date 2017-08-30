import React from 'react';
import GroupDetails from '../../containers/groupDetails';
import UserForm from '../../containers/userForm';


const Group = () => {
  return (
    <div>
      <h1>Group Page</h1>
      <GroupDetails/>
      <UserForm />
    </div>
  );
};

export default Group;
