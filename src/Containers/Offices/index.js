import React, { Component } from 'react';
import {Box,ModalDecision} from "../../Components"
import {connect} from 'react-redux'
import {dispatchRemoveCompanyOffice} from '../../dispatcher';
import './Offices.css'

class Offices extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      company:{},
      alert:false
    }
    this.removeOffice = this.removeOffice.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changePage = this.changePage.bind(this)
  }
  callModal(id,name,company){
    this.setState({
      office:{
        id,
        name,
        company
      },
      modal:true,
    })
  }
  resetState(){
    this.setState({
      office:{},
      modal:false
    })
  }
  removeOffice(){
    this.props.removeCompanyOffice({
      company_id:this.state.office.company,
      id:this.state.office.id
    })
    this.resetState()
  }
  changePage(){
    this.props.changePage({
      page:'overviews',
      companyId:''
    })
  }
  render() {
    let that=this
    var found = this.props.companyProfile.find(function(element) {
      console.log(element);
      return element.id === parseInt(that.props.companyId);
    });
    console.log(found);
    console.log(that.props.companyId);
    return (
      <div className="container">
        {this.state.modal&&
          (<ModalDecision
            title='Remove Office'
            desc={`Do you want to remove ${this.state.office.name}?`}
            doDecision={()=>this.removeOffice()}
            cancel={()=>this.resetState()}
          />)
        }
        <div className="Offices">
          <div className="row">
              <div className="header">
                <h4>{found.name}</h4>
              </div>
          </div>
          <div className="row content-container">
            <div className="content">
              <div className="content-label">Address :</div>
              <div className="content-body">{found.address}</div>
            </div>
            <div className="content">
              <div className="content-label">Revenue :</div>
              <div className="content-body">{found.revenue}</div>
            </div>
            <div className="content">
              <div className="content-label">Phone No :</div>
              <div className="content-body">{`(${found.cCode}) ${found.phone}`}</div>
            </div>
            <button className="btn btn-primary bottomRight-absolute" onClick={()=>this.changePage()}>Back To Overviews</button>
          </div>
          <div className="row box-container">
            {found.office?(found.office.length>0&&found.office.map((item,key)=>{
              let date= item.office_start_date.split('-')
              return(
                <Box
                  type="office"
                  key={key}
                  data={
                    {
                      Name:item.name,
                      Location_Lat:item.lat,
                      Location_Lng:item.lng,
                      Office_Start_Date:`${date[2]}/${date[1]}/${date[0]}`
                    }
                  }
                  remove={()=>this.callModal(item.id,item.name,found.id)}
                />
              )
            }
          )):(<h3>There is no office created yet</h3>)}
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
    removeCompanyOffice: (data) => {
      dispatch(dispatchRemoveCompanyOffice(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Offices)
