import React from "react";
import "./movies.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class Movie extends React.Component {
  imagePath = "https://image.tmdb.org/t/p/w500";
  state = {
    // api: "4e7e6fd9dac20aab990497f467a08566",
    allMovies: [
      {
        adult: false,
        backdrop_path: "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
        genre_ids: [28, 878, 12],
        id: 565770,
        original_language: "en",
        original_title: "Blue Beetle",
        overview:
          "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        popularity: 3180.6,
        poster_path: "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        release_date: "2023-08-16",
        title: "Blue Beetle",
        video: false,
        vote_average: 7.2,
        vote_count: 910,
      },
      {
        adult: false,
        backdrop_path: "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
        genre_ids: [28, 9648, 53, 80],
        id: 762430,
        original_language: "en",
        original_title: "Retribution",
        overview:
          "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.",
        popularity: 1730.839,
        poster_path: "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
        release_date: "2023-08-23",
        title: "Retribution",
        video: false,
        vote_average: 6.8,
        vote_count: 230,
      },
      {
        adult: false,
        backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
        genre_ids: [28, 878, 27],
        id: 615656,
        original_language: "en",
        original_title: "Meg 2: The Trench",
        overview:
          "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        popularity: 1363.273,
        poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        release_date: "2023-08-02",
        title: "Meg 2: The Trench",
        video: false,
        vote_average: 7,
        vote_count: 1959,
      },
      {
        adult: false,
        backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        genre_ids: [35, 12, 14],
        id: 346698,
        original_language: "en",
        original_title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        popularity: 1142.304,
        poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        release_date: "2023-07-19",
        title: "Barbie",
        video: false,
        vote_average: 7.3,
        vote_count: 5024,
      },
      {
        adult: false,
        backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        genre_ids: [28, 80, 53],
        id: 385687,
        original_language: "en",
        original_title: "Fast X",
        overview:
          "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything\u2014and everyone\u2014that Dom loves, forever.",
        popularity: 1264.755,
        poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        release_date: "2023-05-17",
        title: "Fast X",
        video: false,
        vote_average: 7.3,
        vote_count: 3852,
      },
      {
        adult: false,
        backdrop_path: "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        genre_ids: [27, 53],
        id: 1008042,
        original_language: "en",
        original_title: "Talk to Me",
        overview:
          "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        popularity: 1207.188,
        poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
        release_date: "2023-07-26",
        title: "Talk to Me",
        video: false,
        vote_average: 7.2,
        vote_count: 876,
      },
      {
        adult: false,
        backdrop_path: "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
        genre_ids: [27, 9648, 53],
        id: 968051,
        original_language: "en",
        original_title: "The Nun II",
        overview:
          "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        popularity: 1135.055,
        poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        release_date: "2023-09-06",
        title: "The Nun II",
        video: false,
        vote_average: 6.5,
        vote_count: 327,
      },
      {
        adult: false,
        backdrop_path: "/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
        genre_ids: [28, 53],
        id: 717930,
        original_language: "en",
        original_title: "Kandahar",
        overview:
          "After his mission is exposed, an undercover CIA operative stuck deep in hostile territory in Afghanistan must fight his way out, alongside his Afghan translator, to an extraction point in Kandahar, all whilst avoiding elite enemy forces and foreign spies tasked with hunting them down.",
        popularity: 817.615,
        poster_path: "/lCanGgsqF4xD2WA5NF8PWeT3IXd.jpg",
        release_date: "2023-05-25",
        title: "Kandahar",
        video: false,
        vote_average: 6.9,
        vote_count: 560,
      },
      {
        adult: false,
        backdrop_path: "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
        genre_ids: [16, 35, 10751, 14, 10749],
        id: 976573,
        original_language: "en",
        original_title: "Elemental",
        overview:
          "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        popularity: 721.589,
        poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
        release_date: "2023-06-14",
        title: "Elemental",
        video: false,
        vote_average: 7.8,
        vote_count: 2390,
      },
      {
        adult: false,
        backdrop_path: "/5xUJBgds96m6Xi2EtUpSzbw24D7.jpg",
        genre_ids: [53, 9648],
        id: 852436,
        original_language: "fr",
        original_title: "Seule : Les dossiers Silvercloud",
        overview:
          "Alone in the mountains of Switzerland, Anne discovers that her isolated chalet is on surveillance and has been bugged. Caught up by her former life as an intelligence secret agent and an affair with her handler, Anne can only count on herself to get out alive.",
        popularity: 831.039,
        poster_path: "/qx81rP4b4UFcxjabCqfe79F24Z0.jpg",
        release_date: "2023-03-08",
        title: "Let Her Kill You",
        video: false,
        vote_average: 6.6,
        vote_count: 43,
      },
      {
        adult: false,
        backdrop_path: "/iOJX54nVAsnPawagFiWXKv1Y6sB.jpg",
        genre_ids: [16, 12, 10751],
        id: 1076364,
        original_language: "en",
        original_title: "Carl's Date",
        overview:
          "Carl Fredricksen reluctantly agrees to go on a date with a lady friend\u2014but admittedly has no idea how dating works these days. Ever the helpful friend, Dug steps in to calm Carl's pre-date jitters and offer some tried-and-true tips for making friends\u2014if you're a dog.",
        popularity: 696.244,
        poster_path: "/y8NtM6q3PzntqyNRNw6wgicwRYl.jpg",
        release_date: "2023-06-15",
        title: "Carl's Date",
        video: false,
        vote_average: 7.8,
        vote_count: 180,
      },
      {
        adult: false,
        backdrop_path: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
        genre_ids: [12, 28],
        id: 335977,
        original_language: "en",
        original_title: "Indiana Jones and the Dial of Destiny",
        overview:
          "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
        popularity: 689.51,
        poster_path: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
        release_date: "2023-06-28",
        title: "Indiana Jones and the Dial of Destiny",
        video: false,
        vote_average: 6.7,
        vote_count: 1737,
      },
      {
        adult: false,
        backdrop_path: "/jv4tiXAgaArMQo57jFMjvBEjmoa.jpg",
        genre_ids: [28, 18, 12],
        id: 980489,
        original_language: "en",
        original_title: "Gran Turismo",
        overview:
          "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
        popularity: 697.78,
        poster_path: "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
        release_date: "2023-08-09",
        title: "Gran Turismo",
        video: false,
        vote_average: 7.6,
        vote_count: 409,
      },
      {
        adult: false,
        backdrop_path: "/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg",
        genre_ids: [27, 878, 53],
        id: 820609,
        original_language: "en",
        original_title: "No One Will Save You",
        overview:
          "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.",
        popularity: 664.523,
        poster_path: "/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg",
        release_date: "2023-09-22",
        title: "No One Will Save You",
        video: false,
        vote_average: 7,
        vote_count: 254,
      },
      {
        adult: false,
        backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
        genre_ids: [28, 12, 878],
        id: 667538,
        original_language: "en",
        original_title: "Transformers: Rise of the Beasts",
        overview:
          "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        popularity: 565.382,
        poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        release_date: "2023-06-06",
        title: "Transformers: Rise of the Beasts",
        video: false,
        vote_average: 7.5,
        vote_count: 3253,
      },
      {
        adult: false,
        backdrop_path: "/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
        genre_ids: [28, 18],
        id: 678512,
        original_language: "en",
        original_title: "Sound of Freedom",
        overview:
          "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
        popularity: 584.558,
        poster_path: "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
        release_date: "2023-07-03",
        title: "Sound of Freedom",
        video: false,
        vote_average: 8,
        vote_count: 489,
      },
      {
        adult: false,
        backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
        genre_ids: [28, 12, 878],
        id: 298618,
        original_language: "en",
        original_title: "The Flash",
        overview:
          "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        popularity: 529.097,
        poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        release_date: "2023-06-13",
        title: "The Flash",
        video: false,
        vote_average: 6.9,
        vote_count: 2938,
      },
      {
        adult: false,
        backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        genre_ids: [16, 28, 12],
        id: 569094,
        original_language: "en",
        original_title: "Spider-Man: Across the Spider-Verse",
        overview:
          "After reuniting with Gwen Stacy, Brooklyn\u2019s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse\u2019s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        popularity: 530.218,
        poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        release_date: "2023-05-31",
        title: "Spider-Man: Across the Spider-Verse",
        video: false,
        vote_average: 8.4,
        vote_count: 4356,
      },
      {
        adult: false,
        backdrop_path: "/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
        genre_ids: [10749, 18],
        id: 820525,
        original_language: "en",
        original_title: "After Everything",
        overview:
          "Besieged by writer\u2019s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past \u2013 and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
        popularity: 506.015,
        poster_path: "/gZLGCibvFY4zmt8sWUZcbBTHRtk.jpg",
        release_date: "2023-09-13",
        title: "After Everything",
        video: false,
        vote_average: 6.8,
        vote_count: 62,
      },
      {
        adult: false,
        backdrop_path: "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
        genre_ids: [16, 35, 28],
        id: 614930,
        original_language: "en",
        original_title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        overview:
          "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
        popularity: 448.537,
        poster_path: "/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
        release_date: "2023-07-31",
        title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        video: false,
        vote_average: 7.3,
        vote_count: 634,
      },
    ],
    isLogin: true,
  };
  loginFun = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };
  render() {
    return (
      <>
        {/* <button className="btn btn-primary m-3" onClick={this.loginFun}>
          {this.state.isLogin ? "Logout" : "Login"}
        </button> */}
        {/* && */}
        {this.state.isLogin && (
          <div className="container mt-5">
            <div className="row">
              {this.state.allMovies.map((movie) => (
                <Card
                  style={{ width: "20rem", margin: "2px" }}
                  className="Card"
                >
                  <Card.Img
                    variant="top"
                    src={`${this.imagePath}${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Link
                      className="btn btn-success"
                      to={`/movieDetails/${movie.id}`}
                    >
                      See Details
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
        {/* {this.state.isLogin ? (
          <div className="container mt-5">
            <div className="row">
              {this.state.allMovies.map((movie) => (
                <Card
                  style={{ width: "18rem", margin: "2px" }}
                  className="Card"
                >
                  <Card.Img
                    variant="top"
                    src={`${this.imagePath}${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <h1>Plz Login First</h1>
        )} */}

        {/* && */}
      </>
    );
  }
}

export default Movie;
