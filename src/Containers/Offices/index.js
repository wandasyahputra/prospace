import React, { Component } from 'react';
import {Box} from "../../Components"
import './Offices.css'

class Offices extends Component {
  render() {
    return (
      <div className="container">
        <div className="Offices">
          <div className="row">
              <div className="header">
                <h4>Google</h4>
              </div>
          </div>
          <div className="row content-container">
            <div className="content">
              <div className="content-label">Label1</div>
              <div className="content-body">Pernyataan 1</div>
            </div>
            <div className="content">
              <div className="content-label">Label1</div>
              <div className="content-body">Pernyataan 1</div>
            </div>
            <div className="content">
              <div className="content-label">Label1</div>
              <div className="content-body">Pernyataan 1</div>
            </div>
            <div className="content">
              <div className="content-label">Label1</div>
              <div className="content-body">Pernyataan 1</div>
            </div>
            <a className="btn btn-primary bottomRight-absolute" href="Overviews">Back To Overviews</a>
          </div>
          <div className="row box-container">
            <Box/>
            <Box/>
            <Box/>
            <Box/>
          </div>
        </div>
      </div>
    );
  }
}

export default Offices;
