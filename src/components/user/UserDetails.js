import React from 'react';
import GroupList from '../../containers/user/groupList';
import UserList from '../../containers/user/userList';

const UserDetails = () => {
  return (
    <div>
        <div className="row">
            <div className="list-group col col-sm-6">
                <h3>Users:</h3>
                <UserList />
            </div>
            <div className="list-group col col-sm-6">
                <h3>Groups:</h3>
                <GroupList />
            </div>
        </div>                
    </div>
  );
};

export default UserDetails;
