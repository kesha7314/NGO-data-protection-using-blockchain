pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;


    uint public productCount1 = 0;
    mapping(uint => Product1) public products1;


    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
        address payable receiver;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased,
        address payable receiver
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased,
        address payable receiver
    );


     struct Product1 {
        uint id1;
        string name1;
        uint price1;
        address payable owner1;
        bool purchased1;
    }

    event ProductCreated1(
        uint id1,
        string name1,
        uint price1,
        address payable owner1,
        bool purchased1
    );

    event ProductPurchased1(
        uint id1,
        string name1,
        uint price1,
        address payable owner1,
        bool purchased1
    );



    constructor() public {
        name = " NGO";
    }

    function createProduct(address payable _receiver, string memory _name, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price, msg.sender, false, _receiver);
        // Trigger an event
        emit ProductCreated( productCount, _name, _price, msg.sender, false, _receiver);
    }

    function purchaseProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.receiver;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price);
        // Require that the product has not been purchased already
        require(!_product.purchased);
        // Require that the buyer is not the seller
        require(_product.owner == msg.sender);
        // Mark as purchased
        _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true, _seller);
    }

      function createProduct1(string memory _name, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);

       // Increment product count
        productCount1 ++;
        // Create the product
        products1[productCount1] = Product1(productCount1, _name, _price, msg.sender, false);
        // Trigger an event
        emit ProductCreated1(productCount1, _name, _price, msg.sender, false);
    }



    function purchaseProduct1(uint _id) public payable {
        // Fetch the product
        Product1 memory _product = products1[_id];
        // Fetch the owner
        address payable _seller = _product.owner1;
        // Make sure the product has a valid id
        require(_product.id1 > 0 && _product.id1 <= productCount1);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price1);
        // Require that the product has not been purchased already
        require(!_product.purchased1);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _product.owner1 = msg.sender;
        // Mark as purchased
        _product.purchased1 = true;
        // Update the product
        products1[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased1(productCount1, _product.name1, _product.price1, msg.sender, true);
    }




}
