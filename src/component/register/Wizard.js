import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {                    
                        step: 1,
                        currentStep: 1,
                        username: '',
                        userPassword: '',
                        address:'',
                        mobile: '',
                        isDisabled: true
        }
    }
    
    componentDidUpdate(){
        console.log("CurrentStep : " + this.state.currentStep);
 
    }

    next = () => {
        this.setState({ currentStep: this.state.currentStep + 1 })
        //console.log("Next : username : " + this.state.username);
       // console.log("Next : password : " + this.state.userPassword);
       // console.log("Next : address : " + this.state.address);
        //console.log("Next : mobile : " + this.state.mobile);
    }

    prev = () => {
        this.setState({ currentStep: this.state.currentStep - 1 })
    }

     onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
        if(this.state.username !== '' && this.state.userPassword !== ''){
            this.setState({ isDisabled: false })
         }else{
            this.setState({ isDisabled: true })
         }
      }

      onSubmitHandler = (e) => {    
        alert("onSubmitHandler")
      }

    render() {
        return (
            <div className="wizard-box">
                <form onSubmit={this.onSubmitHandler}>

                    {this.state.currentStep === 1 &&
                        <Step1 stateData={this.state} onChange={this.onChange} />
                    }

                    {this.state.currentStep === 2 &&
                        <Step2 stateData={this.state} onChange={this.onChange} />
                    }

                    {this.state.currentStep === 3 &&
                        <Step3 stateData={this.state} />
                    }

                    <div className="button-box">
                        {this.state.currentStep > 1 &&
                            <Button onClick={this.prev} buttonLabel="Previous" />
                        }
                        {this.state.currentStep < 3 &&
                            <Button onClick={this.next} buttonLabel="Next" disable = { this.state.isDisabled } />
                        }

                        {this.state.currentStep > 2 &&
                            <button buttonLabel="Submit" type="submit">Submit</button>
                        }
                    </div>
                </form>
            </div>
        );
    }
}

export function Button(props) {
    return (
      <button type="button" onClick={props.onClick} disabled = { props.disable }>
        { props.buttonLabel }
      </button>
    );
  }



  


