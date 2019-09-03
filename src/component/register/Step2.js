import React from 'react';


const Step2 = (props) => {
    return  <div className="form-box">
    
      <h2 className="texhit-center">Contact Details</h2>
      <div className="form-group">
        <input type="text" value = { props.stateData.address } className="form-control" name="address" id="address" placeholder="address" onChange={props.onChange} required="required" />
      </div>
      <div className="form-group">
        <input type="text" value = { props.stateData.mobile } className="form-control" name="mobile" id="mobile" placeholder="mobile" onChange={props.onChange} required="required" />
      </div>
    
  </div>
}

export default  Step2;