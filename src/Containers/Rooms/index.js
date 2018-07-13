import React, { Component } from 'react';
import {Box,ModalDecision} from "../../Components"
import {connect} from 'react-redux'
import {dispatchRemoveMeetingRoom} from '../../dispatcher';
import './Rooms.css'

class Rooms extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      room:{},
      alert:false
    }
    this.removeRoom = this.removeRoom.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changePage = this.changePage.bind(this)
  }
  callModal(id,name,room,company){
    this.setState({
      room:{
        id,
        name,
        room,
        company
      },
      modal:true,
    })
  }
  resetState(){
    this.setState({
      room:{},
      modal:false
    })
  }
  removeRoom(){
    this.props.removeMeetingRoom({
      company_id:this.props.match.params.companyId,
      office_id:this.props.match.params.officeId,
      id:this.state.room.id
    })
    this.resetState()
  }
  changePage(a){
    window.location=`/office/${a}`
  }
  render() {
    let that=this
    var found = this.props.companyProfile.find(function(element) {
      return element.id === parseInt(that.props.match.params.companyId,10);
    });
    found = found.office.find(function(element) {
      return element.id === parseInt(that.props.match.params.officeId,10);
    });
    console.log(found);
    let date= found.office_start_date.split('-')
    return (
      <div className="container">
        {this.state.modal&&
          (<ModalDecision
            title='Remove Room'
            desc={`Do you want to remove ${this.state.room.name}?`}
            doDecision={()=>this.removeRoom()}
            cancel={()=>this.resetState()}
          />)
        }
        <div className="Rooms">
          <div className="row">
              <div className="header">
                <h4>{found.name}</h4>
              </div>
          </div>
          <div className="row content-container">
            <div className="content">
              <div className="content-label">Location Latitude :</div>
              <div className="content-body">{found.lat}</div>
            </div>
            <div className="content">
              <div className="content-label">Location Longitude :</div>
              <div className="content-body">{found.lng}</div>
            </div>
            <div className="content">
              <div className="content-label">Office Start Date :</div>
              <div className="content-body">{`${date[2]}/${date[1]}/${date[0]}`}</div>
            </div>
            <div className="content">
              <div className="content-label">Number of Meeting Rooms :</div>
              <div className="content-body">{`${found.meeting_room.length}`}</div>
            </div>
            <button className="btn btn-primary bottomRight-absolute" onClick={()=>this.changePage(found.company_id)}>Back To Office</button>
          </div>
          <div className="row box-container">
            {found.meeting_room&&found.meeting_room.length>0?(found.meeting_room.map((item,key)=>{
              return(
                <Box
                  type="office"
                  key={key}
                  data={
                    {
                      Name:item.name,
                      Location:item.location,
                      Floor:item.floor,
                      Size:item.size,
                      Seats:item.seat
                     }
                  }
                  remove={()=>this.callModal(item.id,item.name,found.id,this.props.match.params.companyId)}
                />
              )
            }
          )):(<h3>There is no room created yet</h3>)}
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
    removeMeetingRoom: (data) => {
      dispatch(dispatchRemoveMeetingRoom(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Rooms)
