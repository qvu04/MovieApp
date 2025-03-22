import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './pages/HomePage/MovieTicket/redux/ticketSlice.js'
import loadingSlice from './component/Loading/redux/loadingSlice.js'
import userSlice from './pages/LoginPage/redux/userSlice.js'
export const store = configureStore({
  reducer: {
    ticketSlice: ticketSlice,
    loadingSlice: loadingSlice,
    userSlice: userSlice,
  }
})

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</StrictMode>,

)
