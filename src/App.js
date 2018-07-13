import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom'
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/overviews' component={Overviews}/>
          <Route exact path='/office/:companyId' component={Offices}/>
          <Route exact path='/rooms/:companyId/:officeId' component={Rooms}/>
          <Redirect to={'/overviews'}/>
        </Switch>
      </BrowserRouter>
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
