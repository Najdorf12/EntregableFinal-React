import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store'
import {Provider} from "react-redux"
import "bootswatch/dist/slate/bootstrap.min.css"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
