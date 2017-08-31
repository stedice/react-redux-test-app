import React from 'react';
import GroupDetails from './groupDetails';
import GroupForm from '../../containers/group/groupForm';


const Group = () => {
  return (
    <div>
      <h1 className="alt-header">Group Detail Page</h1>
      <GroupDetails/>
      <GroupForm />
    </div>
  );
};

export default Group;
