import React, { Component } from 'react'
import Overlay from './Overlay.js'
import './ModalDecision.css'

class ModalDecision extends Component {
  render(){
    const {title, desc,doDecision,cancel} = this.props
    return(
      <div>
        <Overlay/>
        <div className="modal fade show modal-decision" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" >{title}</h5>
              </div>
              <div className="modal-body">
                {desc}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancel}>Close</button>
                <button type="button" className="btn btn-primary" onClick={doDecision}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalDecision;
