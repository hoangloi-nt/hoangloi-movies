import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="header flex justify-center items-center gap-x-5 py-10 text-white mb-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>
      <section className="banner h-[400px] page-container mb-10">
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)] "></div>
          <img
            src="https://vtv1.mediacdn.vn/2019/4/26/poster-payoff-1-1556273680151870157160-crop-1556273779257196175768.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-5 left-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-3">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Adventure
              </span>
            </div>
            <button className="flex justify-center items-center gap-x-2 py-2 px-6 rounded-lg bg-primary text-white font-medium">
              Watch now
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
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Now playing
        </h2>
        <div className="movies-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2021_11_17/poster-3930.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-4"
            />
            <h3 className=" text-lg font-bold mb-1">Spiderman: No Way Home</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-4">
              <span>2020</span>
              <span className="flex justify-center items-center gap-1">
                7.9{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#ffa500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <button className="py-2 px-4 bg-primary rounded-lg capitalize w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Top rated
        </h2>
        <div className="movies-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2021_11_17/poster-3930.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-4"
            />
            <h3 className=" text-lg font-bold mb-1">Spiderman: No Way Home</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-4">
              <span>2020</span>
              <span className="flex justify-center items-center gap-1">
                7.9{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#ffa500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <button className="py-2 px-4 bg-primary rounded-lg capitalize w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container mb-10">
        <h2 className="capitalize mb-5 text-white text-2xl font-bold">
          Trending
        </h2>
        <div className="movies-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
            <img
              src="https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2021_11_17/poster-3930.jpg"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-4"
            />
            <h3 className=" text-lg font-bold mb-1">Spiderman: No Way Home</h3>
            <div className="flex justify-between items-center text-sm opacity-50 mb-4">
              <span>2020</span>
              <span className="flex justify-center items-center gap-1">
                7.9{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#ffa500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </div>
            <button className="py-2 px-4 bg-primary rounded-lg capitalize w-full">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
