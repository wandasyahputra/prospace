import React, { Component } from 'react';
import {Box,CompanyForm,OfficeForm} from '../../Components'
import './Overviews.css'

class Overviews extends Component {
  render() {
    return (
      <div className="container">
        <div className="Overviews">
          <div className="row">
            <div className="col-md-6">
              <CompanyForm/>
            </div>
            <div className="col-md-6">
              <OfficeForm/>
            </div>
          </div>
          <div className="row">
            <Box/>
            <Box/>
          </div>
        </div>
      </div>
    );
  }
}

export default Overviews;
