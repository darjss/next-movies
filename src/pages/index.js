import { useState } from "react";
import Card from "@/components/Card";
const Home=()=>{
  const [movies, setMovies]=useState([]);
  const [topMovies, setTopMovies]=useState([]);
  const getMovies= async ()=>{
    const response=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54');
    const data=await response.json();
    setMovies(data.results);
    const page1=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=bfb05274c15c4567464450df0a88ea54');
    const data1=await page1.json();
    const page2=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2&api_key=bfb05274c15c4567464450df0a88ea54');
    const data2=await page2.json();
    const page3=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3&api_key=bfb05274c15c4567464450df0a88ea54');
    const data3=await page3.json();
    const topData=data1.results.concat(data2.results, data3.results)
    setTopMovies(topData);

  }
  getMovies();
  return(
    <div>
          <div>
            <h1 className="text-3xl text-center">Popular this week
            </h1>
          <div className="flex flex-wrap gap-5 bg-violet-100">
      {movies.map((movie)=><Card info={movie}/>)}
    </div>
    </div>
    <div>
      <p className="text-3xl text-center">Top rated</p>
      <div className="flex flex-wrap gap-5 bg-emerald-100">{topMovies.map((movie)=><Card info={movie}/>)}</div>
    </div>
    </div>
    


  )
}
export default Home
