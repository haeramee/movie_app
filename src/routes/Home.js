import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const restoreMovie = [];

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data: {data: { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); 
    // async, await은 axios가 데이터를 불러올 때까지 기다리도록 함
    movies.forEach(element => restoreMovie.push(element));
    this.setState({ movies: movies, isLoading: false })
  };

  componentDidMount(){
    this.getMovies();
    }

  render() {
    const { isLoading, movies} = this.state;
    // const choices = ["ALL", "Documentary", "Action", "Drama", "Adventure", "Mystery", "Comedy", "Musical", "Crime"]
    return (
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : (
        <div className="movies">
          {/* <div className="filters"> */}
            {/* {genres.map(item => (
               
            ))} */}
            {movies.map(movie => (
              <Movie 
              key={movie.id} 
              id={movie.id}  
              year={movie.year} 
              title={movie.title}
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              genres={movie.genres}
              lang={movie.language}
              bg={movie.background_image}
              yt={movie.yt_trailer_code}
              />
          ))}
          {/* </div> */}
          
          </div>
      )}
    </section>
    );
  }
}

export default Home;

