import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, logoutUser } from '../../actions';

class Header extends Component {

  componentWillMount() {
    this.props.getUser();
    const { user, location: { pathname }, history } = this.props;
    if ((pathname === '/logn' || pathname === '/SignUp') && user) {
      history.push('/');
    }
    if (((pathname === '/' && !user))){
      history.push('/login');
    }
  }

  componentWillReceiveProps(props) {
    const { user, location: { pathname }, history } = props;
    if ((pathname === '/login' || pathname === '/SignUp') && user) {
      history.push('/');
    }
    if (((pathname === '/' && !user))){
      history.push('/login');
    }
  }

  logoutUser = () => {
    const { history, logoutUser } = this.props;
    logoutUser(history);
  }
   render(){
     const { user } = this.props;
    return(
        <div className="header-menu">
          {!user
          ?<span className="header-link">
            Task
          </span>
          :<div>
          <span className="header-link">
            {user.name} Task's
          </span>
          <span className="logout"onClick={this.logoutUser}>LogOut</span></div>}
        </div>
    )
  }
}

function mapStateToprpos(state) {
  return {
    user: state.user.user    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
    logoutUser: history => dispatch(logoutUser(history))    
  };
}

export default connect(mapStateToprpos, mapDispatchToProps)(Header);