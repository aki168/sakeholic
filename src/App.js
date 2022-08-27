import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import 'antd/dist/antd.min.css'


export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  )
}