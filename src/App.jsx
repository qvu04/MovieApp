import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import MovieShowingTime from './pages/HomePage/MovieShowingTime'
import MovieDetail from './pages/HomePage/MovieDetail'
import MovieList from './pages/HomePage/MovieList'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movie/:maHeThongRap' element={<MovieShowingTime />}></Route>
        <Route path='/detail/:detailRoom' element={<MovieDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
