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
import MyNavbar from './components/MyNavbar';
import Main from './pages/Main'
import About from './pages/About'
import FindingPage from './pages/FindingPage'
import AreaSearchPage from './pages/AreaSearchPage'
import RankingPage from './pages/RankingPage'
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage'
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import { AuthContext, useAuth } from './MyContext';


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