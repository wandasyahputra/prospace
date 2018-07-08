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
      company:{},
      alert:false
    }
    this.removeCompany = this.removeCompany.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changePage = this.changePage.bind(this)
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
  changePage(companyId){
    this.props.changePage({
      page:'offices',
      companyId:companyId
    })
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
        {this.state.alert&&(
          <div class="alert alert-success" role="alert">
            A company has been created
            <button type="button" className="close" onClick={()=>this.setState({alert:false})}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div className="Overviews">
          <div className="row">
            <div className="col-md-6">
              <CompanyForm
              success={()=>this.setState({alert:true})}/>
            </div>
            <div className="col-md-6">
              <OfficeForm
                changePage={this.changePage}
              />
            </div>
          </div>
          <div className="row">
            {this.props.companyProfile&&this.props.companyProfile.length>0?(this.props.companyProfile.map((item,key)=>(
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
                changePage={()=>this.changePage(item.id)}
                remove={()=>this.callModal(item.id,item.name)}
            />
          ))):(<h3 className="makeitcenter">There is no companies created yet</h3>)}
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
