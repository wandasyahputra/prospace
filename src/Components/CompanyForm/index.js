import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchAddCompanyProfile} from '../../dispatcher';
import {RE1,RE2} from '../../action/constant.js'

class CompanyForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      address:'',
      revenue:'',
      cCode:'+62',
      phone:''

    }
    this.createCompany = this.createCompany.bind(this)
    this.changeState = this.changeState.bind(this)
  }
  createCompany(){
    if((this.state.name!=='')&&(this.state.address!=='')&&(this.state.revenue!=='')&&(this.state.cCode!=='')&&(this.state.phone!=='')){
      this.props.addCompanyProfile(this.state)
    }else{
      console.log(this.state);
      document.getElementsByClassName('companyForm')[0].className='needs-validation was-validated companyForm'
    }
  }
  changeState(field,e){
    if(field==='name'){
      this.setState({name:e.target.value})
    }else if(field==='address'){
      this.setState({address:e.target.value})
    }else if(field==='revenue'){
      if(e.target.value.match(RE1)){
        this.setState({revenue:e.target.value})
      }
    }else if(field==='cCode'){
      this.setState({cCode:e.target.value})
    }else if(field==='phone'){
      if(e.target.value.match(RE1)){
        this.setState({phone:e.target.value})
      }
    }
  }
  render() {
    return (
      <div>
        <h3>Create Company</h3>
        <div className="needs-validation companyForm" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationName">Name</label>
            <input type="text" className="form-control" id="validationName" placeholder="Name" onChange={(e)=>(this.changeState('name',e))} value={this.state.name} required/>
            <div className="invalid-tooltip">
              Please provide valid Company Name
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationAddress">Address</label>
            <input type="text" className="form-control" id="validationAddress" placeholder="Address" onChange={(e)=>(this.changeState('address',e))} value={this.state.address} required/>
            <div className="invalid-tooltip">
              Please provide valid Company Address
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationRevenue">Revenue</label>
            <input type="text" className="form-control" id="validationRevenue" placeholder="Revenue" onChange={(e)=>(this.changeState('revenue',e))} value={this.state.revenue} required/>
            <div className="invalid-tooltip">
              Please provide valid Company Revenue
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="validationPhone">Phone Number</label>
            <div className="input-group">
              <select className="form-control col-md-2" onChange={(e)=>(this.changeState('cCode',e))} value={this.state.cCode}>
                <option>+62</option>
                <option>+01</option>
                <option>+25</option>
              </select>
              <input type="text" id="validationPhone" className="form-control col-md-10" onChange={(e)=>(this.changeState('phone',e))} value={this.state.phone} required/>
              <div className="invalid-tooltip">
                Please provide valid phone number
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.createCompany}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({companyProfile}) => {
  return {
    companyProfile: companyProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCompanyProfile: (data) => {
      dispatch(dispatchAddCompanyProfile(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CompanyForm)
