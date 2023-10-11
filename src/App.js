import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
// import ProductCard from "./components/product card/card";
import Movie from './components/movies/movies';
import TvShow from "./components/tvshow/tvshow";
import SignUp from "./components/signup/signup";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/about";
import ContactUs from "./components/contact/contact";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import JoinUs from "./components/joinus/joinus";
import Login from "./components/login/login";
import MovieDetails from "./components/moviedetails/movieDetails";
import TvDetails from "./components/tvshowdetails/tvdetails";
import MovieShow from "./components/movieshow/movieshow";
import MoDetails from "./components/mdetails/mdetails";

//component
//jsx
//camel case
// background-color
function App() {
  return (
    <>
      {/* <h3>hello from app component</h3> */}
      <div className="container">
        <Header data="hello from app"/>
        {/* <ProductCard /> */}
        {/* <Movie /> */}
        {/* <TvShow /> */}
        {/* <SignUp />  */}
        <Routes>
          {/* path  */}
          <Route  path="/" element={<Home />}/>
          <Route  path="/movie" element={<Movie />}/>
          <Route  path="/movieshow" element={<MovieShow />}/>
          <Route  path="/tv" element={<TvShow />}/>
          {/* /join/login ,/join/signup */}
          <Route  path="/join" element={<JoinUs />}>
            {/* default nested route */}
            <Route path=""  element={<Login />}/>
            <Route path="login"  element={<Login />}/>
            <Route path="signup"  element={<SignUp />}/>
          </Route>
          <Route  path="/movieDetails/:id" element={<MovieDetails />}/>
          <Route  path="/tvDetails/:id" element={<TvDetails />}/>
          <Route  path="/moDetails/:id" element={<MoDetails />}/>
          <Route  path="/about" element={<About />}/>
          <Route  path="/contact" element={<ContactUs />}/>
          <Route  path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
