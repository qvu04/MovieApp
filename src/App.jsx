
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import MovieShowingTime from './pages/HomePage/MovieShowTime/MovieShowingTime';
import MovieDetail from './pages/HomePage/MovieList/MovieDetail';
import MovieTicketSelected from './pages/HomePage/MovieTicket/MovieTicketSelected';
import RegisterPage from './pages/LoginPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { Toaster } from 'react-hot-toast';
import Loading from './component/Loading/Loading';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TemPlate from './pages/Template/TemPlate';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute';
import AdminPage from './pages/AdminPage/AdminPage';
import AddFilm from './pages/AdminPage/AddFilm';
import EditFilm from './pages/AdminPage/EditFilm';
function App() {

  return (
    <div>
      <Loading />
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<TemPlate content={<HomePage />} />}></Route>
          <Route path='/movie/:maHeThongRap' element={<TemPlate content={<MovieShowingTime />} />}></Route>
          <Route path='/detail/:detailRoom' element={<TemPlate content={<MovieDetail />} />}></Route>
          <Route path='/selectedTicket/:maPhim' element={<TemPlate content={<MovieTicketSelected />} />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/admin/addfilm' element={<AddFilm />}></Route>
          <Route path='/admin/edit/:id' element={<EditFilm />}></Route>
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
