import axios from "axios";
import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function TvShow() {
  const apiKey = '4e7e6fd9dac20aab990497f467a08566';
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [allTvShow, setAllTv] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lang, setLang] = useState("en-US");
  // let totalPages=10;
 
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/airing_today`, {
        params: {
          api_key: apiKey,
          page: pageNumber,
          language: lang,
        },
      })
      .then((response) => {
        console.log(response.data);
        // totalPages = response.data.total_pages;
        // console.log(totalPages);
        setAllTv(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber,lang]);

  const prevPage = () => {
    let currentPage = pageNumber;
    if (!currentPage <= 1) {
      currentPage--;
      setPageNumber(currentPage);
    }
  };
  const NextPage = () => {
    let currentPage = pageNumber;
    // console.log(totalPages);
    // if (currentPage > totalPages) {
      currentPage++;
      setPageNumber(currentPage);
    // }
  };
  const changeLang = () => {
    setLang(lang === "en-US" ? "ar-SA" : "en-US");
  };

  return (
    <>
      <div className="w-25 float-end mt-2">
        <button
          className="btn btn-warning"
          onClick={prevPage}
          disabled={pageNumber <= 1 ? true : false}
        >
          Prev
        </button>
        <button className="btn btn-warning" onClick={NextPage}>
          Next
        </button>
      </div>
      <button className="btn btn-warning" onClick={changeLang}>
        {lang === "en-US" ? "Arabic" : "English"}
      </button>
      <div className="container mt-5">
        <div className="row">
          {allTvShow.map((tvShow) => (
            <Card style={{ width: "20rem", margin: "2px" }} className="Card">
              <Card.Img
                variant="top"
                src={`${imagePath}${tvShow.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{tvShow.name}</Card.Title>
                {/* <Card.Text>{tvShow.overview}</Card.Text> */}
                <Link
                  className="btn btn-success"
                  to={`/tvDetails/${tvShow.id}`}
                >
                  See Details
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default TvShow;
