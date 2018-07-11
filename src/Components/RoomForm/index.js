import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchAddMeetingRoom} from '../../dispatcher';
import {RE1} from '../../action/constant.js'
import './roomForm.css'

class RoomForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      location:'',
      name:'',
      floor:'',
      size:'',
      seat:'',
      office:''
    }
    this.changeState = this.changeState.bind(this)
    this.createRoom = this.createRoom.bind(this)
  }
  changeState(field,e){
    if(field==='location'){
      this.setState({location:e.target.value})
    }else if(field==='name'){
      this.setState({name:e.target.value})
    }else if(field==='floor'){
      if(e.target.value.match(RE1)){
        this.setState({floor:e.target.value})
      }
    }else if(field==='size'){
        this.setState({size:e.target.value})
    }else if(field==='seat'){
      if(e.target.value.match(RE1)){
        this.setState({seat:e.target.value})
      }
    }else if(field==='office'){
      this.setState({office:e.target.value})
    }
  }
  createRoom(){
    console.log(this.state);
    if((this.state.name!=='')&&(this.state.lat!=='')&&(this.state.lng!=='')&&(this.state.office_start_date!=='')&&(this.state.company!=='')){
      this.props.addMeetingRoom({
        company_id:this.props.companyId,
        office_id:this.state.office,
        id:new Date().getTime(),
        location:this.state.location,
        name:this.state.name,
        floor:this.state.floor,
        size:this.state.size,
        seat:this.state.seat,
      })
      this.props.changePage({
        page:'rooms',
        companyId:this.props.companyId,
        officeId:this.state.office
      })
    }else{
      console.log(this.state);
      document.getElementsByClassName('roomForm')[0].className='needs-validation was-validated roomForm'
    }
  }
  render() {
    let that = this
    console.log(that.props.companyId);
    let office=[]
    this.props.companyProfile&&this.props.companyProfile.map((item,key)=>{
      console.log(item.id);
      if(item.id===that.props.companyId){
        office = item.office
      }
    })
    return (
      <div className="roomFormContainer">
        <h3>Create Room</h3>
        <div className="needs-validation roomForm" noValidate>
          <div className="col-md-12">
            <label htmlFor="validationLocation">Location</label>
            <input type="text" className="form-control" id="validationLocation" placeholder="Location"  onChange={(e)=>(this.changeState('location',e))} value={this.state.location} required/>
            <div className="invalid-tooltip">
              Please provide valid Room Location
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationName">Room Name</label>
            <input type="text" className="form-control" id="validationName" placeholder="Room Name"  onChange={(e)=>(this.changeState('name',e))} value={this.state.name} required/>
            <div className="invalid-tooltip">
              Please provide valid Room Name
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationFloor">Floor</label>
            <input type="text" className="form-control" id="validationFloor" placeholder="Floor"  onChange={(e)=>(this.changeState('floor',e))} value={this.state.floor} required/>
            <div className="invalid-tooltip">
              Please provide valid Floor Number
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationSize">Room Size</label>
            <input type="text" className="form-control" id="validationName" placeholder="Room Size"  onChange={(e)=>(this.changeState('size',e))} value={this.state.size} required/>
            <div className="invalid-tooltip">
              Please provide valid Room Size
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationRoom">Seats in Room</label>
            <input type="text" className="form-control" id="validationRoom" placeholder="Number of Seats"  onChange={(e)=>(this.changeState('seat',e))} value={this.state.seat} required/>
            <div className="invalid-tooltip">
              Please provide valid Number of Seats in Room
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="validationOffice">Office</label>
              <select className="form-control" onChange={(e)=>(this.changeState('office',e))} value={this.state.office} required>
                <option value='' disabled >Plese Select</option>
                {office&&office.map((item,key)=>(
                  <option value={item.id} key={key}>{item.name}</option>
                ))}
              </select>
            <div className="invalid-tooltip">
              Please select a office
            </div>
          </div>
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={this.createRoom}>Create</button>
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
    addMeetingRoom: (data) => {
      dispatch(dispatchAddMeetingRoom(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(RoomForm)
