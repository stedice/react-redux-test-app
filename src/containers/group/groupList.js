import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGroup } from '../../actions/groupActions';


class GroupList extends Component {

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

  render() {
    return (
      <div>
        {this.renderGroupList()}               
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
GroupList.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  selectGroup: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectGroup: selectGroup,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
