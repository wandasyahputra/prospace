import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchAddCompanyOffice} from '../../dispatcher';
import {RE2} from '../../action/constant.js'

class OfficeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      lat:'',
      lng:'',
      office_start_date:'',
      company:''
    }
    this.changeState = this.changeState.bind(this)
    this.createOffice = this.createOffice.bind(this)
  }
  changeState(field,e){
    if(field==='name'){
      this.setState({name:e.target.value})
    }else if(field==='lat'){
      if(e.target.value.match(RE2)){
        this.setState({lat:e.target.value})
      }
    }else if(field==='lng'){
      if(e.target.value.match(RE2)){
        this.setState({lng:e.target.value})
      }
    }else if(field==='office_start_date'){
      this.setState({office_start_date:e.target.value})
    }else if(field==='company'){
      this.setState({company:e.target.value})
    }
  }
  createOffice(){
    if((this.state.name!=='')&&(this.state.lat!=='')&&(this.state.lng!=='')&&(this.state.office_start_date!=='')&&(this.state.company!=='')){
      this.props.addCompanyOffice({
        company_id:this.state.company,
        id:new Date().getTime(),
        lat:this.state.lat,
        lng:this.state.lng,
        name:this.state.name,
        meeting_room:[],
        office_start_date:this.state.office_start_date,
      })
      window.location=`/company/${this.state.company}`
    }else{
      document.getElementsByClassName('officeForm')[0].className='needs-validation was-validated officeForm'
    }
  }
  render() {
    return (
      <div>
        <h3>Create Office</h3>
        <div className="needs-validation officeForm" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationOffice">Name</label>
            <input type="text" className="form-control" id="validationOffice" placeholder="Name"  onChange={(e)=>(this.changeState('name',e))} value={this.state.name} required/>
            <div className="invalid-tooltip">
              Please provide valid Office Name
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <label htmlFor="validationAddress">Location</label>
              <input type="text" className="form-control" id="validationAddress" placeholder="Latitude"  onChange={(e)=>(this.changeState('lat',e))} value={this.state.lat} required/>
              <div className="invalid-tooltip">
                Please provide valid Company Location
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationAddress1">&nbsp;</label>
              <input type="text" className="form-control" id="validationAddress1" placeholder="Longitude"  onChange={(e)=>(this.changeState('lng',e))} value={this.state.lng} required/>
              <div className="invalid-tooltip">
                Please provide valid Company Location
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDate">Office Start Date</label>
            <input type="date" className="form-control" id="validationDate" placeholder=""  onChange={(e)=>(this.changeState('office_start_date',e))} value={this.state.office_start_date} required/>
            <div className="invalid-tooltip">
              Please provide valid Company Date
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="validationCompany">Company</label>
              <select className="form-control" onChange={(e)=>(this.changeState('company',e))} value={this.state.company} required>
                <option value='' disabled >Plese Select</option>
                {this.props.companyProfile&&this.props.companyProfile.map((item,key)=>(
                  <option value={item.id} key={key}>{item.name}</option>
                ))}
              </select>
            <div className="invalid-tooltip">
              Please select a company
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.createOffice}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({company}) => {
  return {
    companyProfile: company.dataCompanyProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCompanyOffice: (data) => {
      dispatch(dispatchAddCompanyOffice(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(OfficeForm)
