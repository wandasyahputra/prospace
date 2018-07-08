import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="BoxCard">
          <div className="header">
            <h4>Google</h4>
            <i className="material-icons">close</i>
          </div>
          <div className="content">
            <div className="content-label">Label1</div>
            <div className="content-body">Pernyataan 1</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
