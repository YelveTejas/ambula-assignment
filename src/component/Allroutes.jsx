import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Addtocart from '../pages/Addtocart'
import Intro from '../pages/Intro'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/todo' element={<Todo/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/addtocart' element={<Addtocart/>}></Route>
            <Route path='/' element={<Intro/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes