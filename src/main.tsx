import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from './routes/Home';
// import { Contact } from './routes/Contact';

import { ErrorPage } from './routes/ErrorPage';

import App from './App';
import { About } from './routes/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
