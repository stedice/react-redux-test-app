import React from 'react';
import GroupList from '../../containers/group/groupList';
import UserList from '../../containers/group/userList';


const GroupDetails = () => {
  return (
    <div>
        <div className="row">
            <div className="list-group col col-sm-6">
                <h3>Groups:</h3>
                <GroupList />
            </div>
            <div className="list-group col col-sm-6">
                <h3>Users:</h3>
                <UserList />
            </div>

        </div>                
    </div>
  );
};

export default GroupDetails;
