import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import AppRouter from './routes/AppRouter'; // ফাইলের নামের সাথে মিলিয়ে AppRouter লেখা ভালো
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>,
);