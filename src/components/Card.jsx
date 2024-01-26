import Link from "next/link";
const CardMV = ({ info, type }) => {
  let posterLink = "https://image.tmdb.org/t/p/w500/" + info.poster_path;

  //movie-web.app/media/tmdb-movie-747188-asteroid-city
  // console.log(info);
  //movie-web.app/media/tmdb-movie-695721-the-hunger-games-the-ballad-of-songbirds-and-snakes
  if (type == "movie") {
      return (
    <Link href={`./movie/{${info.id}}`}>
      <div className="w-[200px]  p-3 border-solid border-amber-400 border-2">
        <img className="rounded" src={posterLink} alt="poster" />
        <div className="h-[50px]  text-clip overflow-hidden">
          <p className="text-ellipsis">{info.title}</p>
        </div>
      </div>
    </Link>
  );
  }
  if(type=="show") {
        return <Link href={`./movie/${info.id}`}>
          <div className="w-[200px]  p-3 border-solid border-amber-400 border-2">
            <img className="rounded" src={posterLink} alt="poster" />
            <div className="h-[50px]  text-clip overflow-hidden">
              <p className="text-ellipsis">{info.name}</p>
            </div>
          </div>
        </Link>;
}
};
export default CardMV;
