import React from 'react';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';
// import * as antd from 'antd';
import * as Icon from 'react-bootstrap-icons'
import * as bs from 'react-bootstrap'
import MyNavbar from './components/MyNavbar';
import Main from './pages/Main'
import About from './pages/About'
import SearchPage from './pages/SearchPage'
import UserPage from './pages/UserPage'
import Footer from './components/Footer';
import { useState } from 'react';


export default function App() {


  return (
    <HashRouter>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>

      <Footer />

    </HashRouter>
  )
}