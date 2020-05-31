import React from 'react';
import { Link } from 'react-router-dom'
import './login/vendor/mdi-font/css/material-design-iconic-font.min.css'
import './login/vendor/font-awesome-4.7/css/font-awesome.min.css'
import './login/vendor/select2/select2.min.css'
import './login/vendor/datepicker/daterangepicker.css'
import './login/css/main.css'


class Register extends React.Component {
  



  render() {
    
    return (
      <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div className="wrapper wrapper--w680">
          <div className="card card-1">
            <div className="card-heading" />
            <div className="card-body">
              <div id="register">
                <h1 style={{ color: "blue", fontSize: "30px", marginLeft: "180px" }}>Are You ?</h1>
                <br />
                <br />
               <div style={{marginTop:"30px"}}>  <h1 style={{marginTop:"10px"}}>NGO</h1>    </div>                                                             <h1 style={{marginLeft:"400px"}}>DONOR</h1>
               <h5 > <Link to="/ngo" font-color="blue"> Click here</Link></h5>     <h5 align="center" style={{marginLeft:"380px"}}>  <Link to="/login" font-color="blue"> Click here</Link></h5>
                
               
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }


}


export default Register;