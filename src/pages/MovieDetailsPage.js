import React from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movies/MovieCard";
import { fetcher, tmdbAPI } from "../config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  console.log(data);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)]"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`,
          }}
        >
          {" "}
        </div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={tmdbAPI.imageOriginal(poster_path)}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-white text-center text-3xl font-bold mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="sm:flex items-center sm:gap-x-5 mb-10 justify-center grid grid-cols-2 gap-5">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary text-primary border rounded-md"
              key={item.id}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10 font-bold">Casts</h2>
      <div className="grid sm:grid-cols-4 gap-5 sm:px-10 grid-cols-2">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={tmdbAPI.imageOriginal(item.profile_path)}
              alt=""
              className="w-full h-[300px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);
  return (
    <div className="sm:p-10">
      <div className="flex flex-col gap-10">
        {results
          .filter((item) => item.type === "Trailer")
          .map((item) => (
            <div className="" key={item.id}>
              <h3 className="text-lg font-medium p-3 inline-block bg-primary">
                {item.name}
              </h3>
              <div className="w-full" key={item.id}>
                <iframe
                  width="1520"
                  height="585"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="Youtube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full sm:h-[650px] h-auto object-cover"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="sm:p-10 py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={50} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
