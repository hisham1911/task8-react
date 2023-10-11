import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";
class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "IPhone 14",
      price: 1200,
      imgPath:
        "https://images-na.ssl-images-amazon.com/images/I/31VjlrbE3bL._SL500_._AC_SL500_.jpg",
      quantity: 3,
      inStock: true,
    };
    console.log("inside constructor");
  }
  componentDidMount() {
    console.log("inside componentDidMount");
  }
  componentDidUpdate() {
    console.log("updated component");
  }

  componentWillUnmount() {
    //destroy
    //clean up
    console.log("component dead");
  }

  addToCart = () => {
    console.log("function called");
    // if (this.state.productData.quantity > 0) {
    //   this.state.productData.quantity = this.state.productData.quantity - 1;
    // }//Error
    this.setState({
      quantity:
        this.state.quantity > 0 ? this.state.quantity - 1 : "Out of Stock",
    });
  };

  changeName = (newName) => {
    this.setState({
      title: newName,
    });
  };
  render() {
    console.log("inside render");
    return (
      <>
        <div className="row">
          <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.state.imgPath} />
              <Card.Body>
                {/* binding */}
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Text>{this.state.price} $</Card.Text>
                <div className="row">
                  <Card.Text>Avalible :{this.state.quantity} Items </Card.Text>
                  <Button variant="primary" onClick={this.addToCart}>
                    Add To Cart
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => this.changeName("IPhone 15 Pro Max")}
                  >
                    ChangeName
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="./images/laptop.jpeg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>
      </>
    );
  }
}

export default ProductCard;
