import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar1 extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Userprofile" className="nav-link" style={{fontSize:"15px",color:"white"}}>
            User12
          </Link>
        </li>
        <li className="nav-item" >
          <a href="" onClick={this.logOut.bind(this)} className="nav-link" style={{ fontSize:"15px",color:"white"}}>
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
     
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          
          
<ul className="navbar-nav px-3">
<li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
  <small className="text-white"><span id="account" style={{marginRight:"500px",fontSize:"15px"}}>{this.props.account}</span></small>
</li>
</ul>

<ul style ={{marginRight:"100px",color:"White"}}>
<li ><i className="active" data-id="tab-about"/><Link to="/Profile1"><h4 style={{color:"white", marginTop:"10px" , fontSize:"15px"}}>Dashboard</h4></Link><span /></li>
<li ><i className="active" data-id="tab-about"/><Link to="/Profile"><h4 style={{color:"white", marginTop:"10px" , fontSize:"15px"}}>Donation-board</h4></Link><span /></li>
</ul>
          {localStorage.usertoken ? userLink : ""}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar1)









