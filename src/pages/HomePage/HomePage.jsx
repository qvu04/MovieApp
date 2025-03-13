import React from 'react'
import MovieCarouselBanner from './MovieCarouselBanner'
import MovieList from './MovieList'
import MovieLogo from './MovieLogo'
import MovieShowingTime from './MovieShowingTime'

export default function HomePage() {
    return (
        <div>
            <MovieCarouselBanner />
            <div id="movie-list">
                <MovieList />
            </div>
            <div id="showing-movie">
                <MovieLogo />
                <MovieShowingTime />
            </div>
        </div>
    )
}
