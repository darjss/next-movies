import { StrictMode, useEffect, useState } from "react";
import Card from "@/components/Card";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [trendSeries, setTrendSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const yearTop = [];
  let searchName;
  const [searchResults, setSearchResults] = useState([]);
  const [myTop, setMyTop] = useState(yearTop);
  useEffect(() => {
    getMovies();
    getSeries();
  },[])
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const data = await response.json();
    setMovies(data.results);
    const page1 = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const data1 = await page1.json();
    const page2 = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const data2 = await page2.json();
    const page3 = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const data3 = await page3.json();
    const topData = data1.results.concat(data2.results, data3.results);
    const top1 = await fetch(
      "https://api.themoviedb.org/3/movie/872585?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top1);
    const top2 = await fetch(
      "https://api.themoviedb.org/3/movie/840430?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top2);
    const top3 = await fetch(
      "https://api.themoviedb.org/3/movie/1016084?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top3);
    const top4 = await fetch(
      "https://api.themoviedb.org/3/movie/747188?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top4);
    const top5 = await fetch(
      "https://api.themoviedb.org/3/movie/915935?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top5);
    const top6 = await fetch(
      "https://api.themoviedb.org/3/movie/615777?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54"
    ).then((response) => response.json());
    yearTop.push(top6);
    setMyTop(yearTop);
    console.log(yearTop);
    setTopMovies(topData);
  };
  const getSeries = async () => {
    const tvPage1 = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const tvData1 = await tvPage1.json();
    setTrendSeries(tvData1.results);
    const tvPage2 = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54"
    );
    const tvData2 = await tvPage2.json();
    console.log(tvData2.results);
    setTopSeries(tvData2.results);
  };
  const search = async () => {
    let MVrequestURL = "https://api.themoviedb.org/3/search/movie?query=";
    let TVrequestURL = "https://api.themoviedb.org/3/search/movie?query=";
    let APIkey = "&api_key=bfb05274c15c4567464450df0a88ea54";
    let seperated = searchName.split(" ");
    let filterWords = seperated.filter((word) => word != "");
    filterWords.map((word, index) => {
      index == 0 ? (MVrequestURL += word) : (MVrequestURL += "+" + word);
      index == 0 ? (TVrequestURL += word) : (TVrequestURL += "+" + word);
    });
    MVrequestURL += APIkey;
    TVrequestURL += APIkey;
    const searchResult = await fetch(MVrequestURL).then((response) =>
      response.json()
    );
    
    setSearchResults(searchResult.results);
    // console.log(requestURL);
    // console.log(searchResult);
  };
  const getName = (event) => {
    searchName = event.target.value;
    // console.log(searchName);
  };
  return (
    <StrictMode>
      <div className="bg-amber-50 w-screen">
        <div>
          <div className="flex justify-center">
            <input
              className="w-[400px] h-[50px]  rounded-xl bg-amber-100"
              onChange={getName}
              placeholder="Type a name of the movie"
            ></input>
            <button
              className="border-lime-300 border-2 border-solid rounded-xl"
              onClick={search}
            >
              Search
            </button>
          </div>

          <div>
            <p className="text-3xl text-center">Search Results</p>
            <div className="flex flex-wrap gap-5 bg-indigo-100">
              {searchResults.map((movie) => (
                <Card info={movie} type="movie" />
              ))}
            </div>
          </div>
          <div>
            <div>
              <p className="text-3xl text-center">Best of 2023</p>
              <div className="flex flex-wrap gap-5 bg-indigo-100">
                {myTop.map((movie) => (
                  <Card info={movie} type="movie" />
                ))}
              </div>
            </div>
            <h1 className="text-3xl text-center">Popular this week</h1>
            <div className="flex flex-wrap gap-5 bg-violet-100">
              {movies.map((movie) => (
                <Card info={movie} type="movie" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl text-center">Top rated</p>
            <div className="flex flex-wrap gap-5 bg-emerald-100">
              {topMovies.map((movie) => (
                <Card info={movie} type="movie" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl text-center"> Popular This week</p>
            <div className="flex flex-wrap gap-5 bg-emerald-100">
              {trendSeries.map((series) => (
                <Card info={series} type="show" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-3xl text-center">Top rated </p>
            <div className="flex flex-wrap gap-5 bg-violet-100">
              {topSeries.map((series) => (
                <Card info={series} type="show" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
};
export default Home;
