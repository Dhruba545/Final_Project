import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import { Helmet, HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <Helmet>
        <title>Bistro-Boss</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     <RouterProvider router={router} />
     </HelmetProvider>
  
  </React.StrictMode>,
)
