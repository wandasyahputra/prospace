import React, { Component } from 'react';

class OfficeForm extends Component {
  render() {
    return (
      <div>
        <h3>Create Office</h3>
        <div className="needs-validation" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationOffice">Name</label>
            <input type="text" className="form-control" id="validationOffice" placeholder="Name" value="" required/>
            <div className="invalid-tooltip">
              Please provide valid Office Name
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <label htmlFor="validationAddress">Location</label>
              <input type="text" className="form-control" id="validationAddress" placeholder="Latitude" value="" required/>
              <div className="invalid-tooltip">
                Please provide valid Company Address
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationAddress">&nbsp;</label>
              <input type="text" className="form-control" id="validationAddress" placeholder="Longitude" value="" required/>
              <div className="invalid-tooltip">
                Please provide valid Company Address
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationRevenue">Office Start Date</label>
            <input type="date" className="form-control" id="validationRevenue" placeholder="" value="" required/>
            <div className="invalid-tooltip">
              Please provide valid Company Revenue
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="validationRevenue">Company</label>
              <select className="form-control">
                <option>Company 1</option>
                <option>Company 2</option>
                <option>Company 3</option>
              </select>
            <div className="invalid-tooltip">
              Please select a company
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeForm;
