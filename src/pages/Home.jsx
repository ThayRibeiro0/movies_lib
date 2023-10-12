import { useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'

import './MovieGrid.css'

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div>hi</div>
    )
}

export default Home