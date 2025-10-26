import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Careers from './Pages/Careers'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}
export default App