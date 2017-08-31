import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../../actions/userActions';


class UserList extends Component {

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
  selectUser: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectUser: selectUser,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
