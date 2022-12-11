import { useEffect, useState } from 'react'
import { getMovieList, searchMovie } from './api'
import Navbar from './components/Navbar';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="max-w-xs bg-gray-800 border-t border-gray-600 rounded-lg shadow-md">
            <a href="#">
                <img
                  className="rounded-t-lg w-full h-64"
                  alt="movie-poster"
                  src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{movie.title}</h5>
                </a>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{movie.release_date}</span>
                <p className="mb-3 mt-3 font-normal text-gray-400">{movie.overview.substring(0, 100)+"..."}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-cyan-500 hover:bg-cyan-600">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      );
    });
  }

  const search = async (e) => {
    if(e.length > 3) {
      const query = await searchMovie(e);
      setPopularMovies(query.results);
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <header className="text-4xl font-bold text-teal-300 mt-16 mb-5">Movies</header>
        <div className="flex items-center mb-8 w-6/12">   
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input
                onChange={({target}) => search(target.value)}
                type="text"
                id="search" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
          </div>
        </div>
        <div className="flex flex-wrap w-10/12 justify-center items-center gap-5">
           <PopularMovieList />
        </div>
      </div>

    </div>
  )
}

export default App
