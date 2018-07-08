import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchRemoveCompanyProfile} from '../../dispatcher';
import {Box,CompanyForm,OfficeForm,ModalDecision} from '../../Components'
import './Overviews.css'

class Overviews extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal:false,
      company:{}
    }
    this.removeCompany = this.removeCompany.bind(this)
    this.resetState = this.resetState.bind(this)
  }
  callModal(id,name){
    console.log('hereeee');
    this.setState({
      company:{
        id,
        name
      },
      modal:true,
    })
  }
  resetState(){
    this.setState({
      company:{},
      modal:false
    })
  }
  removeCompany(){
    this.props.removeCompanyProfile(this.state.company.id)
    this.resetState()
  }
  render() {
    return (
      <div className="container">
        {this.state.modal&&
          (<ModalDecision
            title='Remove Company'
            desc={`Do you want to remove ${this.state.company.name}?`}
            doDecision={()=>this.removeCompany()}
            cancel={()=>this.resetState()}
          />)
        }
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
            {this.props.companyProfile&&this.props.companyProfile.map((item,key)=>(
              <Box
                key={key}
                type="overview"
                data={
                  {
                    Name:item.name,
                    Address:item.address,
                    Revenue:item.revenue,
                    Phone_no:`(${item.cCode}) ${item.phone}`
                  }
                }
                remove={()=>this.callModal(item.id,item.name)}
            />
            ))}
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
    removeCompanyProfile: (data) => {
      dispatch(dispatchRemoveCompanyProfile(data))
    },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Overviews)
