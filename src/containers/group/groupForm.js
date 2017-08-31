import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createGroup, removeGroup } from '../../actions/groupActions';


class GroupForm extends Component {

  render() {
    let userInput;
    const activeGroup = this.props.groups.find((x) => x.selected);
    const groupEmpty = usersInGroup(this.props.users, activeGroup) === 0;
    return (
      <form className="form-inline row" 
          onSubmit ={(e) => {
            e.preventDefault();
            const input = {name: userInput.value};
            this.props.createGroup(input);
            e.target.reset();
        }}>
        <input type="text" id="inputNewGroup"
               name="newGroup" className="form-control" 
               placeholder="Enter new group name"
               ref={node => userInput = node} />
        <button type="submit" className="btn btn-primary" >
                create group </button>
        <button type="button" className="btn btn-danger" disabled={!activeGroup || !groupEmpty}
                onClick={() => this.props.removeGroup()}>
                remove group </button>
    </form>
    );
  }

}

// props validation
GroupForm.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  createGroup: PropTypes.func,
  removeGroup: PropTypes.func
};

const usersInGroup = (users = [], group = {}) => {
  // if (!users || !group){
  //   return 0;
  // }
  return users.reduce((sum, user) => {
    return sum + user.groups.includes(group.id);
  }, 0);
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
    groups: state.groupReducers
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createGroup: createGroup,
    removeGroup: removeGroup,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
