import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchRemoveCompanyProfile} from '../../dispatcher';
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
