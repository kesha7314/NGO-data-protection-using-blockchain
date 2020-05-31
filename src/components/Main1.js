import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './css/base.css'




class Main1 extends Component {

  render() {
   const owner2 = "0x715C788e2F6fDBB841F65541897040108A8b7473"
  
    const txtstyle = {
        color : "White",
        backgroundColor : "blue",
        marginLeft : "600px"
    }

   
    return (
      
      <div id="content">
        
       
       <br /> <br /> <h1 style={{ textAlign: 'center' , fontStyle: 'Bold'}} >GIVE A LITTLE , HELP A LOT. </h1>
        <br />
        <br />
        <form onSubmit={(event) => {
          
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct1(name, price)
          
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Needs for"
              style ={{width: '300px' , marginLeft : '500px'}}
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Required Fund"
              style ={{width: '300px' , marginLeft : '500px'}}
              required />
          </div>
          <br />
          <br />
          <button type="submit" className="btn btn-primary" style = { txtstyle }> Looking For Fund </button>
        </form>
        <p>&nbsp;</p>
        <br />
        <br />
        <h1 style ={{textAlign : 'center'}}> DASHBOARD</h1> <br />
        <ReactBootStrap.Table striped bordered hover style ={{ height : '500px' , width: '1200px' ,marginLeft: '100px'}}>
          <thead>
            <tr style ={{fontsize: '200px'}}>
              <th scope="col" ><h3 style ={{ textAlign : "center"}}>Number</h3></th>             
              <th scope="col"><h3 style ={{ textAlign : "center"}}>Needs For</h3></th>
              <th scope="col"><h3 style ={{ textAlign : "center"}}>Donation</h3></th>
              <th scope="col"><h3 style ={{ textAlign : "center"}}>Address of Owner</h3></th>
             
              <th scope="col"><h3 style ={{ textAlign : "center"}}>Status</h3></th>
            </tr>
          </thead>
          <tbody id="productList" style = {{ textSizeAdjust: "10px", textAlign:"center"}}>
  
            { this.props.products1.map((product1, key) => {
              return(
                <tr key={key} style = {{ fontsize : "20px"}}>
                  <th scope="row">{product1.id1.toString()}</th>
                   
                  <td style = {{color :"gray", fontSize : "15px"}} >{product1.name1} </td>
                  <td style = {{color : "blue"}}>{window.web3.utils.fromWei(product1.price1.toString(), 'Ether')} Eth </td>
                  <td>{product1.owner1}</td>
              <td>{product1.owner1 === owner2 ? <h1 style={{color : "green"}}>Appropriate</h1>  : <h2 style ={{color : "red"}}>Fraud</h2>}</td>
                 
                </tr>
              )
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Main1;

