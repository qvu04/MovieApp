import React from 'react'
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
export default function Header() {
    return (
        <div className="w-full h-20 flex items-center bg-gradient-to-b from-black to-transparent p-10  ">
            <div>
                <h1 className="text-3xl font-bold text-white uppercase tracking-wider">
                    <span className="text-orange-500 hover:text-yellow-400 transition duration-300">M</span>ovie
                    <span className="relative inline-block">
                        <span className="absolute inset-0 flex items-center justify-center w-7 h-7 border-2 border-orange-500 rounded-full text-orange-500">
                            IN
                        </span>
                        <span className="invisible">IN</span>
                    </span>
                    Hands
                </h1>
            </div>
            <nav className="flex-1 flex justify-center space-x-10 text-white font-semibold">
                <Link to="/" className="relative group">
                    HOME
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <ScrollLink to="movie-list" smooth={true} duration={500} className="relative group cursor-pointer">
                    SHOWING MOVIE
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
                <ScrollLink to="showing-movie" smooth={true} duration={500} className="relative group cursor-pointer">
                    COMING MOVIES
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
            </nav>
            <div className='space-x-5 text-white font-semibold'>
                <Link className="relative group">SignIn
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span></Link>
                <Link className="relative group">SignUp
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span></Link>
            </div>

        </div>
    );
}
