export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <h2 className='text-blue-200'>Hello, Next 13 🔥</h2>
      <ul>
        {res.results.map((movie: any) => (
          <div>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </ul>
    </main>
  )
}