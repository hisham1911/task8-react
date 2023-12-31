import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MoDetails() {
  const apiKey = "4e7e6fd9dac20aab990497f467a08566";
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();
  const [tvShow, setTvShow] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: apiKey,
          adult:false
        },
      })
      .then((response) => {
        console.log(response.data);
        setTvShow(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      <Card style={{ width: "20rem", margin: "2px" }} className="Card">
        <Card.Img variant="top" src={`${imagePath}${tvShow.poster_path}`} />
        <Card.Body>
          <Card.Title>{tvShow.title}</Card.Title>
          <Card.Text>{tvShow.overview}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MoDetails;
