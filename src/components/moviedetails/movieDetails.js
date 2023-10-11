import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
function MovieDetails() {
  const { id } = useParams();

  return (
    <>
      <h1>movie details for id :{id}</h1>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.state.imgPath} />
        <Card.Body>
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
      </Card> */}
    </>
  );
}

export default MovieDetails;
