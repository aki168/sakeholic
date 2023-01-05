import React, { useState, useEffect } from 'react';
import AOS from 'aos'
import {
  HashRouter,
  Routes,
  Route,
  Outlet,
  Navigate
  // NavLink,
  // useNavigate,
  // useParams,
} from 'react-router-dom';
import MyNavbar from '@COM/MyNavbar'
import Main from '@PAGE/Main'
import About from '@PAGE/About'
import FindingPage from '@PAGE/FindingPage'
import AreaSearchPage from '@PAGE/AreaSearchPage'
import RankingPage from '@PAGE/RankingPage'
import SearchPage from '@PAGE/SearchPage';
import UserPage from '@PAGE/UserPage'
import Footer from '@COM/Footer';
import NotFoundPage from '@PAGE/NotFoundPage';
import LoginPage from '@PAGE/LoginPage'
import RegisterPage from '@PAGE/RegisterPage';
import { AuthContext, useAuth } from '@/MyContext';


const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()
  return token ? <Outlet /> : <Navigate to="/login" replace />
}

const Layout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {

  const [token, setToken] = useState(null)
  const [userData, setUserData] = useState({})
  const mediaPath = `${process.env.PUBLIC_URL}/media/`

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])


  return (
    <HashRouter>
      <AuthContext.Provider value={{ token, setToken, userData, setUserData, mediaPath }}>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/finding' element={<FindingPage />} />
            <Route path='/areaSearch' element={<AreaSearchPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/ranking' element={<RankingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
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