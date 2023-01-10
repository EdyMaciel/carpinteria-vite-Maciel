import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { initFirestore } from './firebase/config'

// initFirestore()

ReactDOM.createRoot(document.getElementById('BodyId')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
