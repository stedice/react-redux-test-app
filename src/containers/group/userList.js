import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleUserGroup } from '../../actions/userActions';


class UserList extends Component {

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
        {this.renderUserList()}               
      </div>
    );
  }

}

// props validation
UserList.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  toggleGroup: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleGroup: toggleUserGroup,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
