import React from 'react';
import { login } from './UserFunctions'
import {Link} from 'react-router-dom'
import './login/vendor/mdi-font/css/material-design-iconic-font.min.css'
import './login/vendor/font-awesome-4.7/css/font-awesome.min.css'
import './login/vendor/select2/select2.min.css'
import './login/vendor/datepicker/daterangepicker.css'
import './login/css/main.css'


class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          
           const newUser = {
            
            email: this.state.fields.email,
            password: this.state.fields.password
          }
      
          login(newUser).then(res => {
            this.props.history.push(`/profile`)
          })
        
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email-ID.";
        }
      }

      

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

     

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
      <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div className="wrapper wrapper--w680">
        <div className="card card-1">
          <div className="card-heading" />
          <div className="card-body">
     <div id="register">
        <h1 style ={{color:"skyblue",fontSize:"30px", marginLeft:"150px"}}>Login page</h1>
        <br />
        <br />

        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.last_name}</div>
        <label>Email</label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.email}</div>
        
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Login"/>
        <h5 align="center"> Do you want to create an account .? <Link to="/register" font-color="blue"> Click here</Link></h5>
        </form>
    </div>
    </div>
    </div>
    </div>
    
</div>

      );
  }


}


export default Login;