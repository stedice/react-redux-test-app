import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleUserGroup } from '../../actions/userActions';
import { selectGroup } from '../../actions/groupActions';


class GroupDetails extends Component {

  renderGroupList() {
    return this.props.groups.map((group) => {
      const listClassName = "list-group-item list-group-item-action" + (group.selected ? " active" : "");
      return (
        <a href="#" key={group.id}
           onClick={() => this.props.selectGroup(group)}
           className={listClassName}>                   
            {group.name} 
            <span className="badge badge-pill badge-default">{usersInGroup(this.props.users, group) || ''}</span>
        </a>
      );
    });
  }

  renderUserList() {
    const activeGroup = this.props.groups.find((x) => x.selected) || {};
    return this.props.users.map((user) => {
      const listClassName = "list-group-item list-group-item-action" + ((user.groups.includes(activeGroup.id)) ? " active" : "");
      return (
        <a href="#" 
           key={user.id}
           onClick={() => this.props.toggleGroup(user, activeGroup)}
           className={listClassName}>
            {user.name}
        </a>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="row">
            <div className="list-group col col-sm-6">
                <h3>Groups:</h3>
                {this.renderGroupList()}
            </div>
            <div className="list-group col col-sm-6">
                <h3>Users:</h3>
                {this.renderUserList()}
            </div>

        </div>                
    </div>

    );
  }

}

const usersInGroup = (users, group) => {
  return users.reduce((sum, user) => {
    return sum + user.groups.includes(group.id);
  }, 0);
};

// props validation
GroupDetails.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  selectGroup: PropTypes.func,
  toggleGroup: PropTypes.func,
};

// Get apps state and pass it as props to GroupDetails
//      > whenever state changes, the GroupDetails will automatically re-render
const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

// Get actions and pass them as props to to GroupDetails
//      > now GroupDetails has this.props.selectUser
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectGroup: selectGroup,
    toggleGroup: toggleUserGroup,
  }, dispatch);
};

// We don't want to return the plain GroupDetails (component) anymore, we want to return the smart Container
//      > GroupDetails is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
