import Link from "next/link";
const Card = ({ info }) => {
  let posterLink = "https://image.tmdb.org/t/p/w500/" + info.poster_path;
  let watchLink = "https://movie-web.app/media/tmdb-movie-" + info.id;
  let arr = info.title.split(" ");
  let words = arr.filter((word) => word != "");
  words.map((word) => {
    word = word.toLowerCase();
    watchLink += "-" + word;
  });
  //movie-web.app/media/tmdb-movie-747188-asteroid-city
  // console.log(info);
  //movie-web.app/media/tmdb-movie-695721-the-hunger-games-the-ballad-of-songbirds-and-snakes
  https: return (
    <Link href={`./movie/{${info.id}}`}>
      <div className="w-24 p-3 border-solid border-amber-400 border-2">
        <img className="w-28 h-28" src={posterLink} alt="poster" />
        <span className="text-wrap">{info.title}</span>
      </div>
    </Link>
  );
};
export default Card;
