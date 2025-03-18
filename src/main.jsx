import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './pages/HomePage/MovieTicket/redux/ticketSlice.js'
import loadingSlice from './component/Loading/redux/loadingSlice.js'
const store = configureStore({
  reducer: {
    ticketSlice: ticketSlice,
    loadingSlice: loadingSlice,
  }
})

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</StrictMode>,

)
