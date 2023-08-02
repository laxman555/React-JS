import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import {routes} from "./Routes/routes";

const router = createBrowserRouter(routes)

function App() {
  return (
<>
<RouterProvider  router={router}/>
</>
  );
}

export default App;
