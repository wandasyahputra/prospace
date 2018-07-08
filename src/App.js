import React, { Component } from 'react';
import {Offices,Overviews} from './Containers'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'overviews',
      companyId:''
    }
    this.changePage = this.changePage.bind(this)
  }
  changePage(data){
    this.setState({
      page:data.page,
      companyId:data.companyId
    })
  }
  render() {
    return (
      <div>
        {this.state.page==='offices'?(
          <Offices changePage={this.changePage} companyId={this.state.companyId}/>
        ):(
          <Overviews changePage={this.changePage}/>
        )}
      </div>
    );
  }
}

export default App;
