import { useParams } from "next/navigation";
import Details from "@/components/Details";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import { useRouter } from "next/router";
const Movies = () => {
  let router = useRouter();
  let { id } = router.query;
  console.log(id);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    fetchMovie();
    // getTrailer();
  }, [id]);
  let watchLink = "https://movie-web.app/media/tmdb-movie-";
  console.log(id);
  id = id.slice(1, id.length - 1);
  const fetchMovie = async () => {
    let getURL = "https://api.themoviedb.org/3/movie/";
    getURL += id + "?language=en-US&api_key=bfb05274c15c4567464450df0a88ea54";
    const movie = await fetch(getURL).then((response) => response.json());
    watchLink += movie.id;
    let arr = movie.title.split(" ");
    let words = arr.filter((word) => word != "");
    words.map((word) => {
      word = word.toLowerCase();
      watchLink += "-" + word;
    });
    //https://movie-web.app/media/tmdb-movie-872585-oppenheimer
    //https://movie-web.app/media/tmdb-movie-872585-oppenheimer
    // api.themoviedb.org/3/movie/{movie_id}/videos
    //  https://api.kinocheck.de/movies?tmdb_id=299534&language=de&categories=Trailer
    console.log(watchLink);
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
    <div className="flex flex-col items-center">
      <ReactPlayer url={trailerURL} controls="true" />
      <div className="flex gap-5">
        <Link href={"/"}>
          <button>Back</button>
        </Link>
        <Link
          href={"https://movie-web.app/media/tmdb-movie-747188-asteroid-city"}
        >
          <button onClick={fetchMovie}>SHOW MOVIE</button>
        </Link>
        <button onClick={getTrailer}>SHOW TRAILER</button>
      </div>

      <Details info={selectedMovie} />
    </div>
  );
};
export default Movies;
