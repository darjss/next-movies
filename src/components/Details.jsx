const Details = ({ info }) => {
      let posterLink = "https://image.tmdb.org/t/p/w500/" + info.poster_path;
    return (
      <div>
        <p>{info.title}</p>
            <img className="w-40" src={posterLink} alt="poster" />
            <p>{info.overview}</p>
            <p>Release date : { info.release_date}</p>
      </div>
    );
}
export default Details