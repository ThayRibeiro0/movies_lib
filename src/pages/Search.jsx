import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MovieGrid.css"

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    return (
        <div className="container">
            <h2 className="title">Results to: 
                <span className="query-text">
                    {query}
                </span>
            </h2>
            <div className="movies-container">
            {movies.length === 0 && <p>LOADING...</p>} 
            {movies.length > 0 && 
            movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
            )}
            </div>
        </div>
    )
}

export default Search