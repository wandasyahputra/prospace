import React, { Component } from 'react';

class CompanyForm extends Component {
  render() {
    return (
      <div>
        <h3>Create Company</h3>
        <div className="needs-validation" novalidate>
          <div className="col-md-12">
            <label for="validationName">Name</label>
            <input type="text" className="form-control" id="validationName" placeholder="Name" value="" required/>
            <div className="invalid-tooltip">
              Please provide valid Company Name
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationAddress">Address</label>
            <input type="text" className="form-control" id="validationAddress" placeholder="Address" value="" required/>
            <div className="invalid-tooltip">
              Please provide valid Company Address
            </div>
          </div>
          <div className="col-md-12">
            <label for="validationRevenue">Revenue</label>
            <input type="text" className="form-control" id="validationRevenue" placeholder="Revenue" value="" required/>
            <div className="invalid-tooltip">
              Please provide valid Company Revenue
            </div>
          </div>
          <div className="form-row">
            <label for="validationRevenue">Phone Number</label>
            <div class="input-group">
              <select class="form-control col-md-2">
                <option>+62</option>
                <option>+01</option>
                <option>+25</option>
              </select>
              <input type="text" class="form-control col-md-10"/>
            </div>
            <div className="invalid-tooltip">
              Please provide valid phone number
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

export default CompanyForm;
