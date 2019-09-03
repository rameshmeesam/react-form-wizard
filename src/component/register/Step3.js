import React from 'react';

const Step3 = (props) => {    
    return  <div className="form-box">
    <h2 className="texhit-center">Confirm Your Details</h2>
      <div className="form-group">
       Email ID : { props.stateData.username }
      </div>
      <div className="form-group">
      Mobile : { props.stateData.mobile }
      </div> 
      <div className="form-group">
      Adress : { props.stateData.address }
      </div>    
  </div>
}

export default Step3;