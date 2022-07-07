import React, { Fragment } from "react";
import MovieList from "../components/movies/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;
