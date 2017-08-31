import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleUserGroup } from '../../actions/userActions';


class GroupList extends Component {

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
        {this.renderGroupList()}     
      </div>
    );
  }

}

// props validation
GroupList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
