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
// import 'antd/dist/antd.css';
// import * as antd from 'antd';
import * as Icon from 'react-bootstrap-icons'
import * as bs from 'react-bootstrap'
import MyNavbar from './components/MyNavbar';
import Main from './pages/Main'
import About from './pages/About'
import FindingPage from './pages/FindingPage'
import AreaSearchPage from './pages/AreaSearchPage'
import RankingPage from './pages/RankingPage'
import SearchList from './pages/SearchList';
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
        <Route path='/finding' element={<FindingPage />} />
        <Route path='/areaSearch' element={<AreaSearchPage />} />
        <Route path='/ranking' element={<RankingPage />} />
        <Route path='/searchList' element={<SearchList />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>

      <Footer />

    </HashRouter>
  )
}