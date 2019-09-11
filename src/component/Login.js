import React from 'react';

class Login extends React.Component {
    constructor(props){ 
     super(props);          
     this.state = {
                  username: '',
                  userPassword: '',
                  error: null,
                  isLoaded: false,
                  webToken: null
                 }
    }

    onChangeHandler = (e) => {   
     this.setState({ [e.target.name]: e.target.value }); 
    }

    handleSubmit = (e) => {     
        e.preventDefault();
        alert("onSubmitHandler");
        let data = {
            "email": this.state.username,
            "password": this.state.userPassword
          }
        let req = {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/api/login', req )
        .then(res => res.json())
        .then((result) => {
            this.setState({ 
                isLoaded: true,
                webToken: result
            })
            console.log("got token : " + result.token );
        },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
                console.log(" got error : " + error);
                //console.log("got error : " + error); 
            }
        );

    }

    render(){

        return(
            <div className="wizard-box"> 
            <>  
            <form onSubmit={this.handleSubmit}>          
            <div className="form-box">
                <h2 className="texhit-center">Login</h2>
                <div className="form-group">
                    <input type="email" value={this.state.username} className="form-control" name="username" id="username" placeholder="username" onChange={this.onChangeHandler} required="required" />
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.userPassword} className="form-control" name="userPassword" id="userPassword" placeholder="password" onChange={this.onChangeHandler} required="required" />
                </div>
                <div className="form-group">
                <button type="submit" >Submit</button>
                </div>
            </div>
            </form>
            </>
          </div>
        );
    }
}

export default Login