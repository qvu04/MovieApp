import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import MovieShowingTime from './pages/HomePage/MovieShowTime/MovieShowingTime'
import MovieDetail from './pages/HomePage/MovieList/MovieDetail'
import MovieList from './pages/HomePage/MovieList/MovieList'
import MovieTicketSelected from './pages/HomePage/MovieTicket/MovieTicketSelected'
import RegisterPage from './pages/LoginPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/movie/:maHeThongRap' element={<MovieShowingTime />}></Route>
        <Route path='/detail/:detailRoom' element={<MovieDetail />}></Route>
        <Route path='/selectedTicket/:maPhim' element={<MovieTicketSelected />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
