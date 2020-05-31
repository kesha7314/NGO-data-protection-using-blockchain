import React from 'react';
import { register } from './UserFunctions'
import { Link } from 'react-router-dom'
import './login/vendor/mdi-font/css/material-design-iconic-font.min.css'
import './login/vendor/font-awesome-4.7/css/font-awesome.min.css'
import './login/vendor/select2/select2.min.css'
import './login/vendor/datepicker/daterangepicker.css'
import './login/css/main.css'


class Register extends React.Component {
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
        first_name: this.state.fields.first_name,
        last_name: this.state.fields.last_name,
        email: this.state.fields.email,
        password: this.state.fields.password
      }

      register(newUser).then(res => {
        this.props.history.push(`/Register2`)
      })

    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["first_name"]) {
      formIsValid = false;
      errors["first_name"] = "*Please enter your username.";
    }

    if (typeof fields["first_name"] !== "undefined") {
      if (!fields["first_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["first_name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["last_name"]) {
      formIsValid = false;
      errors["last_name"] = "*Please enter your username.";
    }

    if (typeof fields["last_name"] !== "undefined") {
      if (!fields["last_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["last_name"] = "*Please enter alphabet characters only.";
      }
    }

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

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
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
                <h1 style={{ color: "skyblue", fontSize: "30px", marginLeft: "150px" }}>Registration page</h1>
                <br />
                <br />

                <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                 
                  <label>First name</label>
                         <input type="text" name="first_name" value={this.state.fields.first_name} onChange={this.handleChange} />
                          <div className="errorMsg" style={{ color: "red", fontSize: "20px" }}>{this.state.errors.first_name}</div>
                 
                 
                  <label>Last name</label>
                           <input type="text" name="last_name" value={this.state.fields.last_name} onChange={this.handleChange} />
                           <div className="errorMsg" style={{ color: "red", fontSize: "20px" }}>{this.state.errors.last_name}</div>
                
                
                  <label>Email</label>
                          <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                          <div className="errorMsg" style={{ color: "red", fontSize: "20px" }}>{this.state.errors.email}</div>

                 

                 

                  <label>Password</label>
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                         <div className="errorMsg" style={{ color: "red", fontSize: "20px" }}>{this.state.errors.password}</div>
                 
                  <input type="submit" className="button" value="Register" />
                  <h5 align="center"> Already have an account.? <Link to="/login" font-color="blue"> Click here</Link></h5>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }


}


export default Register;