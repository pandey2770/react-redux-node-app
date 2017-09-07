import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class Views extends Component {
  render() {
    const { share } = this.props;
    return (
      <div className="views-wrapper">
        {share.map(s => <div key={s}>{s}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  share: state.share
});

export default connect(mapStateToProps)(Views);