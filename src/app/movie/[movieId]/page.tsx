export default async function MovieDetail({params}: any) {

    const movieId = params.movieId;

    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`);
    const res = await data.json();
    console.log(res);

    return (
        <div>
            <h1>{res.title}</h1>
        </div>
    )
}