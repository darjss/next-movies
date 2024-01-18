const Card=({info})=>{
    let posterLink="https://image.tmdb.org/t/p/w500/"+info.poster_path
    return(
        <div className="w-24 p-3 border-solid border-amber-400 border-2">
            <img className="w-28 h-28" src={posterLink} alt="poster" />
            <span className="text-wrap">{info.title}</span>
        </div>
    )
}
export default Card;