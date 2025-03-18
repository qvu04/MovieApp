import React from 'react'
import MovieCarouselBanner from './MovieBanner/MovieCarouselBanner'
import MovieList from './MovieList/MovieList'
import MovieLogo from './MovieShowTime/MovieLogo'
import MovieShowingTime from './MovieShowTime/MovieShowingTime'
import MovieTicketSelected from './MovieTicket/MovieTicketSelected'

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
