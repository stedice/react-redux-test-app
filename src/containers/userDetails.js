import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser, toggleUserGroup } from '../actions/userActions';


class UserDetails extends Component {

  renderUserList() {
    return this.props.users.map((user) => {
      const listClassName = "list-group-item list-group-item-action" + (user.selected ? " active" : "");
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
    const activeUser = this.props.users.find((x) => x.selected) || {};
    return this.props.groups.map((group) => {
      const activeGroups = activeUser.groups || [];
      const listClassName = "list-group-item list-group-item-action" + ((activeGroups.includes(group.id)) ? " active" : "");
      return (
        <a href="#" 
           key={group.id}
           onClick={() => this.props.toggleGroup(activeUser, group)}
           className={listClassName}>
            {group.name}
        </a>
      );
    });
  }

  render() {
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
    </div>

    );
  }

}

// props validation
UserDetails.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  selectUser: PropTypes.func,
  toggleGroup: PropTypes.func,
};

// Get apps state and pass it as props to UserDetails
//      > whenever state changes, the UserDetails will automatically re-render
const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

// Get actions and pass them as props to to UserDetails
//      > now UserDetails has this.props.selectUser
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectUser: selectUser,
    toggleGroup: toggleUserGroup,
  }, dispatch);
};

// We don't want to return the plain UserDetails (component) anymore, we want to return the smart Container
//      > UserDetails is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
