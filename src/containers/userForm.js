import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser, removeUser } from '../actions/userActions';


class UserForm extends Component {

  render() {
    let userInput;
    const activeUser = this.props.users.find((x) => x.selected) ;
    return (
      <form className="form-inline row" 
          onSubmit ={(e) => {
            e.preventDefault();
            const input = {name: userInput.value};
            this.props.createUser(input);
            e.target.reset();
        }}>
        <input type="text" id="inputNewUser"
               name="newUser" className="form-control" 
               placeholder="Enter new user"
               ref={node => userInput = node} />
        <button type="submit" className="btn btn-primary" >
                create user </button>
        <button type="button" className="btn btn-danger" disabled={!activeUser}
                onClick={() => this.props.removeUser()}>
                remove user </button>
    </form>
    );
  }

}

// props validation
UserForm.propTypes = {
  users: PropTypes.array,
  createUser: PropTypes.func,
  removeUser: PropTypes.func
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
const mapStateToProps = (state) => {
  return {
    users: state.userReducers,
  };
};

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createUser: createUser,
    removeUser: removeUser,
  }, dispatch);
};

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
