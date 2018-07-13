import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  render() {
    let headKeys=[]
    let headValues=[]
    if(this.props.data){
      headKeys = Object.keys(this.props.data)
      headValues = Object.values(this.props.data)
    }
    return (
      <div className="col-md-6">
        <div className="BoxCard">

          <div className="header">
            <h4 onClick={this.props.changePage&&this.props.changePage}>{this.props.data.Name}</h4>
            <i className="material-icons" onClick={this.props.remove}>close</i>
          </div>
          {
            headKeys&&headKeys.map((item,key)=>(
            <div className="content">
              <div className="content-label">{item.replace(/_/g,' ')} :</div>
              <div className="content-body">{headValues[key]}</div>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default Box;
