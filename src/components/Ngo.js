import React from 'react';
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
          
           
            this.props.history.push(`/login`)
          
        
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      
      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your NGO-ID.";
      }

      const ngo_id = "NGO_123"
      
      if ( fields["email"] !== ngo_id) {
        formIsValid = false;
        errors["email"] = "Invalid ID";
      }



     
      

      if (!fields["wallet"]) {
        formIsValid = false;
        errors["wallet"] = "*Please Enter Wallet Address";
      }
      
      const ngoid = "0x715C788e2F6fDBB841F65541897040108A8b7473"
      if ( fields["wallet"] !== ngoid) {
        formIsValid = false;
        errors["wallet"] = "Invalid address";
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
        <h1 style ={{color:"skyblue",fontSize:"30px", marginLeft:"150px"}}>Verification</h1>
        <br />
        <br />

        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       
        
        <label>NGO ID</label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.email}</div>
        
        <label>Wallet address</label>
        <input type="text" name="wallet" value={this.state.fields.wallet} onChange={this.handleChange} />
       
        <div className="errorMsg" style ={{color:"red",fontSize:"20px"}}>{this.state.errors.wallet}</div>
        <input type="submit" className="button"  value="Login"/>
        
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