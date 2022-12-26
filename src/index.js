import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header';
import RecipePage from './components/RecipePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/recipe/:id",
    element: <RecipePage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);


