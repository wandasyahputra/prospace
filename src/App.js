import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dispatchRestoreCompanyData} from './dispatcher'
import {Offices,Overviews,Rooms} from './Containers'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'overviews',
      companyId:'',
      officeId:'',
    }
    this.changePage = this.changePage.bind(this)
  }
  changePage(data){
    this.setState({
      page:data.page,
      companyId:data.companyId,
      officeId:data.officeId
    })
  }
  componentWillMount(){
    if(localStorage.getItem('data')){
      let temp = JSON.parse(localStorage.getItem('data'))
      this.props.restoreCompanyData(temp.dataCompanyProfile);
    }
  }
  render() {
    return (
      <div>
        {this.state.page==='offices'?(
          <Offices changePage={this.changePage} companyId={this.state.companyId}/>
        ):(this.state.page==='overviews'?(
          <Overviews changePage={this.changePage}/>
        ):(
          <Rooms changePage={this.changePage} companyId={this.state.companyId} officeId={this.state.officeId}/>
        ))
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restoreCompanyData: (data) => {
      dispatch(dispatchRestoreCompanyData(data))
    },
  }
}
export default connect ('', mapDispatchToProps)(App)
