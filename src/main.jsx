import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import router from './routes/routes';
import AuthProvider from './Auth/AuthProvider';
import ContextProvider from './Provider/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
