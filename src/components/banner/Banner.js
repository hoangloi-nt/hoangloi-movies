import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/effect-cards";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e9b1bbeb94141e8c1685e0432bef437b`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <section className="banner h-[400px] page-container mb-10 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView="auto"
        effect="cards"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const navigate = useNavigate();
  const { data } = useSWR(tmdbAPI.getMovieDetails(item.id), fetcher);
  if (!data) return null;
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)] "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        alt=""
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute bottom-5 left-5 w-full text-white">
        <h2 className="font-bold sm:text-3xl text-xl mb-3">{item.title}</h2>
        {data.genres.length > 0 && (
          <div className="flex items-center gap-x-3 mb-8 ">
            {data.genres.map((item) => (
              <span
                key={item.id}
                className="px-4 py-2 border border-white rounded-md"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}

        <Button
          onClick={() => navigate(`/movie/${item.id}`)}
          className="flex justify-center items-center gap-x-2 w-auto px-6"
        >
          Watch now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
