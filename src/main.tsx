import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.tsx';
import App from './App.tsx';

const router = createBrowserRouter([{
  path: '/',
  element:<App/>,
  children: [
    {
      path: '/',
      element: <Home />,
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLAnchorElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
