import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, logoutUser } from '../../actions';

class Header extends Component {

  componentWillMount() {
    this.props.getUser();
    const { user, location: { pathname }, history } = this.props;
    if ((pathname === '/' || pathname === '/SignUp') && user) {
      history.push('/home');
    }
  }

  componentWillReceiveProps(props) {
    const { user, location: { pathname }, history } = props;
    if ((pathname === '/' || pathname === '/SignUp') && user) {
      history.push('/home');
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
          <span className="header-link">
            Task
          </span>
          {!user
          ?null
          :
          <span className="logout"onClick={this.logoutUser}>LogOut</span>}
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