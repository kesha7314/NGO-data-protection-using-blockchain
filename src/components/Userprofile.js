import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import * as ReactBootStrap from 'react-bootstrap';

class Userprofile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center" style={{textAlign:"center" , marginLeft:"100px"}}>PROFILE</h1>
 
          </div>
          <br />
          <br />

          <ReactBootStrap.Table striped bordered hover style ={{ height : '150px' , width: '500px' ,marginLeft: '200px', borderBlockColor:"black"}}>
            <br />
            <tbody style={{borderBlockColor:"black"}}>
              <tr>
                <td style={{fontSize:"20px"}}>Fist Name</td>
                <td style={{fontSize:"20px"}}>{this.state.first_name}</td>
              </tr>
              <tr style={{fontSize:"20px"}}>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr style={{fontSize:"20px"}}>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
             
            </tbody>
            </ReactBootStrap.Table>
        </div>
      </div>
    )
  }
}

export default Userprofile
