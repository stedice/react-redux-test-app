import React  from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Users and Groups</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>              
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/groups">Groups</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
