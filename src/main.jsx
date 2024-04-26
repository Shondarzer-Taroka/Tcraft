import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Root from './Root/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
    <RouterProvider router={router}>
      <Root></Root>
    </RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)
