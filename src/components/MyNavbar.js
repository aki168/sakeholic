import React from 'react'
import * as bs from 'react-bootstrap'
import { useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons'

const MyNavbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = (e) => {
    e.preventDefault()
    setToggleMenu(prev => !prev)
  }

  return (
    <div>
      <nav className='navbar'>
        <div className="d-flex justify-content-between container py-3">
          <NavLink to="/">
            <h1 className="text-h1 mb-0">SAKEHOLIC BOOK</h1>
          </NavLink>
          <div className='d-none d-md-flex gap-4'>
            <ul className='d-flex fs-4 gap-4 align-items-center mb-0'>
              <li>
                <NavLink
                  className={({ isActive }) => (
                    `border-bottom border-4 border-${isActive ? 'primary' : 'light'}`
                  )}
                  to="/about">關於小酌</NavLink></li>
              <li>
                <NavLink
                  className={({ isActive }) => (
                    `border-bottom border-4 border-${isActive ? 'primary' : 'light'}`
                  )}
                  to="/search">找日本酒</NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (
                    `border-bottom border-4 border-${isActive ? 'primary' : 'light'}`
                  )}
                  to="/user">會員專區</NavLink>
              </li>
            </ul>
            <bs.Button variant="outline-dark" className='fw-bold px-4 py-0'>登入</bs.Button>
          </div>
          <a href="!#" onClick={showMenu} className='d-md-none'>
            <Icon.List
              size={40}
              className='text-white'
            />
          </a>
        </div>
      </nav>
      <bs.Dropdown.Menu className='w-100 fs-2 text-center' show={toggleMenu || false}>
        <bs.Dropdown.Item eventKey="1" className='py-4' onClick={showMenu}>
          <NavLink to="/about">關於小酌</NavLink>
        </bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="2" className='py-4' onClick={showMenu}>
          <NavLink to="/search">找日本酒</NavLink>
        </bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="3" className='py-4' onClick={showMenu}>
          <NavLink to="/user">會員專區</NavLink>
        </bs.Dropdown.Item>
        <bs.Dropdown.Item eventKey="4" className="py-4" onClick={showMenu}>
          <bs.Button variant="outline-dark" size="lg" className='fw-bold px-5 py-2'>
            登入
          </bs.Button>
        </bs.Dropdown.Item>
      </bs.Dropdown.Menu>
    </div>
  )
}

export default MyNavbar