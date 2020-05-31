import React, { Component } from 'react'
import Web3 from 'web3'


import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar1'
import jwt_decode from 'jwt-decode'
import Main1 from './Main1'



class Profile1 extends Component {

 
  
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }
    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
      }
    
      async loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }
    
      async loadBlockchainData() {
        const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Marketplace.networks[networkId]
        if(networkData) {
          const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
          this.setState({ marketplace })
          const productCount1 = await marketplace.methods.productCount1().call()
          this.setState({ productCount1 })
          // Load products
          for (var i = 1; i <= productCount1; i++) {
            const product1 = await marketplace.methods.products1(i).call()
            this.setState({
              products1: [...this.state.products1, product1]
            })
          }
          this.setState({ loading: false})
        } else {
          window.alert('Marketplace contract not deployed to detected network.')
        }
      }
    
      constructor(props) {
        super(props)
        this.state = {
          account: '',
          productCount1: 0,
          products1: [],
          loading: true,
          first_name: '',
      last_name: '',
      email: '',
      errors: {}
        }
    
        this.createProduct1 = this.createProduct1.bind(this)
        this.purchaseProduct1 = this.purchaseProduct1.bind(this)
      }
    
      createProduct1(name1, price1) {
        
        this.setState({ loading: true })
        this.state.marketplace.methods.createProduct1(name1, price1).send({ from: this.state.account })
        .once('receipt', (receipt) => {
          this.setState({ loading: false })
          
        })
      
      }
      purchaseProduct1(id1, price1) {
        this.setState({ loading: true })
        this.state.marketplace.methods.purchaseProduct1(id1).send({ from: this.state.account, value: price1 })
        .once('receipt', (receipt) => {
          this.setState({ loading: false })
        })
      }
    
      render() {
        return (
          <div>
            <Navbar account={this.state.account} />
            <div className="container-fluid mt-5">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  { this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <Main1
                      products1={this.state.products1}
                      createProduct1={this.createProduct1}
                      purchaseProduct1={this.purchaseProduct1} 
                      />
                  }
                </main>
              </div>
            </div>
          </div>
        );
      }


}

export default Profile1;

  

