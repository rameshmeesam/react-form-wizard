import React from 'react';

const Step1 = (props) => {
    return  <div className="form-box">
    <h2 className="texhit-center">Creat Account</h2>
      <div className="form-group">
        <input type="email" value = { props.stateData.username }  className="form-control" name="username" id="username" placeholder="username" onChange={props.onChange} required="required" />
      </div>
      <div className="form-group">
        <input type="password" value = { props.stateData.userPassword }  className="form-control" name="userPassword" id="userPassword" placeholder="password" onChange={props.onChange} required="required" />
      </div> 
    
  </div>
}

export default Step1;