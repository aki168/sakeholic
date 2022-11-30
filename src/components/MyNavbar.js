import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons'
import { useAuth } from '../MyContext';

const MyNavbar = () => {


  const { token } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const showMenu = (e) => {
    e.preventDefault()
    setToggleMenu(prev => !prev)
  }

  const NavItems = [
    {
      name: "關於小酌",
      path: "/about"
    },
    {
      name: "產地查詢",
      path: "/areaSearch"
    },
    {
      name: "熱門排名",
      path: "/ranking"
    },
    {
      name: "酒品總覽",
      path: "/search"
    },
  ]

  return (
    <div>
      <nav className='navbar'>
        <div className="d-flex justify-content-between container py-3">
          <NavLink to="/" onClick={()=>setToggleMenu(false)}>
            <h1 className="text-h1 mb-0">SAKEHOLIC BOOK</h1>
          </NavLink>
          <div className='d-none d-md-flex gap-4'>
            <ul className='d-flex fs-5 gap-4 align-items-center mb-0'>
              {NavItems.map((item, i) => (
                <li key={i}>
                  <NavLink className={({ isActive }) => (
                    `border-bottom border-4 border-${isActive ? 'primary' : 'light'}`
                  )} to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
            <NavLink to={token ? '/user' : '/login'}>
              <Button
                variant={token ? "outline-dark" : "outline-primary"}
                className='fw-bold px-4 py-0'>
                {token ? '會員中心' : '登入'}
              </Button>
            </NavLink>
          </div>
          <button onClick={showMenu} className='d-md-none border-0 bg-dark'>
            <List
              size={40}
              className='text-white'
            />
          </button>
        </div>
      </nav>
      <Dropdown.Menu className='w-100 fs-2 text-center rounded-0' show={toggleMenu || false}>
        {NavItems.map((item, i) => (
          <Dropdown.Item as={'div'} key={i} eventKey={i} className='py-4' onClick={showMenu}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </Dropdown.Item>
        ))}
        <Dropdown.Item as={'div'} eventKey="4" className="py-4" onClick={showMenu}>
          <NavLink to={token ? '/user' : '/login'}>
            <Button
              variant={token ? "outline-dark" : "outline-primary"}
              size="lg"
              className='fw-bold px-5 py-2'>
              {token ? '會員中心' : '登入'}
            </Button>
          </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>
    </div>
  )
}

export default MyNavbar