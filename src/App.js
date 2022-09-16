import React, { useState, useEffect } from 'react';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate
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
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage'
import { AuthContext, useAuth } from './MyContext';


const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()
  return token ? <Outlet /> : <Navigate to="/login" replace />
}
////////////////////////////////////////////

const Layout = () => {
  const { token } = useAuth()
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {

  // const [token, setToken] = useState('ABC')
  const [token, setToken] = useState(null)


  return (
    <HashRouter>
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/finding' element={<FindingPage />} />
            <Route path='/areaSearch' element={<AreaSearchPage />} />
            <Route path='/searchList' element={<SearchList />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/ranking' element={<RankingPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/user' element={<UserPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </HashRouter>
  )
}