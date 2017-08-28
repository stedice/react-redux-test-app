import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, toggleUserGroup, createUser, removeUser} from '../actions/userActions';


class UserList extends Component {
    
    renderUserList() {
        return this.props.users.map((user) => {
            const listClassName = "list-group-item list-group-item-action" + (user.selected ? " active":"");
              return (
                <a href="#" key={user.id}
                   onClick={() => this.props.selectUser(user)}
                   className={listClassName}>                   
                   {user.name} 
                   <span className="badge badge-pill badge-default">{user.groups.length || ''}</span>
                </a>
            );
        });
    }

    renderGroupList() {
        const activeUser = this.props.users.find((x)=>  x.selected) || {};
        return this.props.groups.map((group) => {
            const activeGroups = activeUser.groups || [];
            const listClassName = "list-group-item list-group-item-action" + ((activeGroups.includes(group.id)) ? " active":"");
              return (
                <a href="#" key={group.id}
                   onClick={() => this.props.toggleGroup(activeUser, group)}
                   className={listClassName}>
                   {group.name}
                </a>
            );
        });
    }

    render() {
        let userInput;
        return (
            <div>
                <div className="row">
                    <div className="list-group col col-sm-6">
                        <h3>Users:</h3>
                        {this.renderUserList()}
                    </div>
                    <div className="list-group col col-sm-6">
                        <h3>Groups:</h3>
                        {this.renderGroupList()}
                    </div>

                </div>                
                <form className="form-inline row" 
                      onSubmit={ e => {
                        e.preventDefault();
                        var input = {name: userInput.value};
                        this.props.createUser(input);
                        e.target.reset();
                    }}>
                    <input type="text" id="inputNewUser"
                           name="newUser" className="form-control" 
                           placeholder="Enter new user"
                           ref={node => userInput = node} />
                    <button type="submit" className="btn btn-primary">
                            create user </button>
                    <button type="button" className="btn btn-danger"
                            onClick={() => this.props.removeUser()}>
                            remove user </button>
                </form>
            </div>

        );
    }

}

// props validation
UserList.propTypes = {
    //allUsers: PropTypes.array,
    users: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    groups: PropTypes.array,
    selectUser: PropTypes.func,
    toggleGroup: PropTypes.func,
    createUser: PropTypes.func,
    removeUser: PropTypes.func
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        //allUsers: state.allUsers,
        users: state.userReducers,
        groups: state.groupReducers
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser,
        toggleGroup: toggleUserGroup,
        createUser: createUser,
        removeUser: removeUser,
        }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
