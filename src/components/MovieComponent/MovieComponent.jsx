import React from 'react'
import MovieDetails from './MovieDetails'
import MovieCard from './MovieCard'
import styles from './Moviecomponent.module.css'

function MovieComponent() {
    return (
        <section className={styles.movieContainer}>
            {
                MovieDetails.map(movie=><MovieCard key={movie.id} details={movie} />)
            }
        </section>
    )
}

export default MovieComponent