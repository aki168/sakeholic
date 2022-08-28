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
import Main from './pages/Main'
import About from './pages/About'
import SearchPage from './pages/SearchPage'
import UserPage from './pages/UserPage'
import { useState } from 'react';


export default function App() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = (e) => {
    e.preventDefault()
    setToggleMenu(prev=>!prev)
  }

  return (
    <HashRouter>

      <nav className='navbar'>
        <div className="d-flex justify-content-between container py-3">
          <NavLink to="/">
            <h1 className="text-h1 mb-0">SAKEHOLIC BOOK</h1>
          </NavLink>
          <div className='d-none d-md-flex gap-4'>
            <ul className='d-flex fs-4 gap-4 align-items-center mb-0'>
              <li><NavLink to="/about">關於小酌</NavLink></li>
              <li><NavLink to="/search">找日本酒</NavLink></li>
              <li><NavLink to="/user">會員專區</NavLink></li>
            </ul>
            <bs.Button variant="outline-dark" className='fw-bold px-4 py-0'>登入</bs.Button>
          </div>
        <a href="!#" onClick={showMenu} >
          <Icon.List
            size={40}
            className='d-md-none text-white'
          />
        </a>
        </div>
      </nav>
      <bs.Dropdown.Menu className='w-100 fs-2 text-center' show={toggleMenu || false}>
        <bs.Dropdown.Item eventKey="1" className='py-4'>關於小酌</bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="2" className='py-4'>找日本酒</bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="3" className='py-4'>會員專區</bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="4" className="py-4">
          <bs.Button variant="outline-dark" size="lg" className='fw-bold px-5 py-2'>登入</bs.Button>
        </bs.Dropdown.Item>
      </bs.Dropdown.Menu>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>

    </HashRouter>
  )
}