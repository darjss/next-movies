import { useParams } from "next/navigation";
import Details from "@/components/Details";
import { useState } from "react";
const Movies = () => {
  let { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
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

  console.log(id);
  return (
    <div>
      <button onClick={fetchMovie}>SHOW MOVIE</button>
      <Details info={selectedMovie} />
    </div>
  );
};
export default Movies;
