import { useParams } from "next/navigation";
import Details from "@/components/Details";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const Movies = () => {
  let { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [trailerURL, setTrailerURL] = useState("");
  // useEffect(() => {
  //   fetchMovie();
  //   getTrailer();
  // }, [])
  id = id.slice(1, id.length - 1);
  const fetchMovie = async () => {
    let getURL = "https://api.themoviedb.org/3/movie/";
    getURL += id + "?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54";
    const movie = await fetch(getURL).then((response) => response.json());
    console.log(movie);
    console.log(getURL);
    setSelectedMovie(movie);
    console.log(typeof id);

  };
  const getTrailer = async () => {
    let trailerLink =
      "https://api.kinocheck.de/movies?tmdb_id=" +
      selectedMovie.id +
      "/&language=en&categories=Trailer";
    console.log(trailerLink);
    const trailer = await fetch(trailerLink).then((response) =>
      response.json()
    );
    const ytURL =
      "https://www.youtube.com/watch?v=" + trailer.trailer.youtube_video_id;
    console.log(trailer.trailer.youtube_video_id);
    console.log(trailer);
    setTrailerURL(ytURL);
  };

  console.log(id);
  return (
    <div className="flex flex-col">
      <ReactPlayer url={trailerURL} controls="true" />
      <button onClick={fetchMovie}>SHOW MOVIE</button>
      <button onClick={getTrailer}>SHOW TRAILER</button>
      <Details info={selectedMovie} />
    </div>
  );
};
export default Movies;
