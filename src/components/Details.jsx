const Details = ({ info }) => {
  let posterLink = "https://image.tmdb.org/t/p/w500/" + info.poster_path;
  //api.themoviedb.org/3/movie/{movie_id}/videos
  //  https://api.kinocheck.de/movies?tmdb_id=299534&language=de&categories=Trailer


  return (
    <div className="flex gap-8 self-center border rounded p-5">
      <img className="w-[200px] rounded-md" src={posterLink} alt="poster" />
      <div className="w-[600px] flex-col flex gap-7">
        <p className="font-bold text-3xl">{info.title}</p>
        <p>{info.overview}</p>
        <p>Release date : {info.release_date}</p>
        <p>Duration: {info.runtime} mins</p>
      </div>
    </div>
  );
};
export default Details;
