import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-dark text-white pt-3 pb-5'>
      <div className='container text-center 
      d-flex flex-column 
      flex-md-row justify-content-md-around
      pb-5'>
        <div className='pt-5'>
          <NavLink to="/" className='text-white d-md-none'>
            <h2 className='title-font'>SAKEHOLIC BOOK</h2>
            <p className='fs-4 fw-light'>小酌圖鑑。</p>
          </NavLink>
          <NavLink to="/" className='text-white d-none d-md-block text-start'>
            <h2 className='title-font'>SAKEHOLIC <br /> BOOK</h2>
            <p className='fs-4 fw-light'>小酌圖鑑。</p>
          </NavLink>
        </div>

        <div className='pt-4'>
          <h2 className='title-font'>SITEMAP</h2>
          <ul className='d-flex flex-column gap-3'>
            <li>
              <NavLink to="/about" className='text-white'>
                關於小酌
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className='text-white'>
                找日本酒
              </NavLink>
            </li>
            <li>
              <NavLink to="/user" className='text-white'>
                會員專區
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='py-4'>
          <h2 className='title-font d-none d-md-block text-start mb-3'>COPYRIGHT</h2>
          <h5 className='d-none d-md-block text-start fw-lighter'>
            ©2022 SAKEHOLIC BOOK<br/>
            BY AKI CHENG<br/>
            All rights reserved.
          </h5>
          <p className='fw-lighter d-md-none'>©2022 SAKEHOLIC BOOK All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer