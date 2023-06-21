import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home/Home.jsx'
import './index.css'

const routes = createRoutesFromElements(
  <Route 
    path='/' 
    element={<Layout/>}
    errorElement={<Error />}
  >
    <Route 
      index 
      element={<Home />} 
    />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
