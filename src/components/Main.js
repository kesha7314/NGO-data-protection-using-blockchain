import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import './css/base.css'

class Main extends Component {

  render() {
    const ngo = "0x715C788e2F6fDBB841F65541897040108A8b7473"
   
    return (
      <div id="content">
        <br />
        <br />
        
       
        <h1 style={{marginLeft:"400px" ,color:"skyblue"}}>GIVE THE MONEY FOR A BETTER TOMORROW .!
</h1>
<br />
<br />
<br />
        <h2 style={{marginLeft: "200px"}}>Add Transaction Detail</h2>
        <form style={{marginLeft: "200px"}} onSubmit={(event) => {
          event.preventDefault()
          const add = this.addressn.value
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(add,name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.addressn = input }}
              className="form-control"
              placeholder="Receiver's Address (Fill Address of owner)"
              style ={{width: '500px' , marginLeft : '50px'}}
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Sector's Name (Where You want to Donate ?)"
              style ={{width: '500px' , marginLeft : '50px'}}
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Amount"
              style ={{width: '500px' , marginLeft : '50px'}}
              required />
          </div>
          <button type="submit" className="btn btn-primary" style ={{marginLeft:"250px"}}>Donate</button>
        </form>


        <p>&nbsp;</p>
       
   
        { this.props.products.map((product, key) => {
              return(
        <table className="table">
            { !product.purchased
        ? <thead>
           <tr>
            <th scope="col"><h2>Confirm Details</h2></th>
          </tr>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sector's Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Donor's Address</th>
              <th scope="col">Receiver address</th>
              <th scope="col"></th>
            </tr>
          
         
        </thead>
           : null
          }
          <tbody id="productList">
          { !product.purchased
        ?
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
          <td> {product.receiver}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Confirm
                        </button>
                        : null
                      }
                    </td>
                </tr>
                : null

              }
        
              
          </tbody>
        </table>

        
                
        )
       
       })}
      



        <p>&nbsp;</p>
        <h2 style={{marginLeft: "600px"}}>Donated Money's Detail</h2>
        <br />
        <br />
        <ReactBootStrap.Table striped bordered hover style ={{ height : '50px' , width: '1200px' ,marginLeft: '100px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" ><h3>Sector's Name </h3></th>
              <th scope="col"><h3>Amount</h3></th>
              <th scope="col"><h3>Donor's Address</h3></th>
              <th scope="col"><h3>Receiver</h3></th>
              <th scope="col"><h3>Donated to</h3></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
              <td>{product.receiver}</td>
              <td>{product.receiver === ngo ? <h1 style ={{color : "green"}}>NGO</h1> : <h1 style ={{color : "red"}}> Unknown Party </h1> }</td>
                </tr>
              )
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}

export default Main;
