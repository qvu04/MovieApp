import React from 'react'
import MovieCarouselBanner from './MovieCarouselBanner'
import MovieList from './MovieList'
import MovieLogo from './MovieLogo'
import MovieShowingTime from './MovieShowingTime'

export default function HomePage() {
    return (
        <div>
            <MovieCarouselBanner />
            <MovieList />
            <div>
                <MovieLogo />
                <MovieShowingTime />
            </div>
        </div>
    )
}
