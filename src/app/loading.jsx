import Movie from './Movie';

export default async function Home() {
  return (
    <main>
      <h2 className='text-blue-200'>Hello, Next 13 🔥</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(movie => (
          <Movie
            skeleton={true}
          />
        ))}
      </div>
    </main>
  )
}