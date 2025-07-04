import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/experience'
import Example from './components/Example'
import Blog from './components/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FavPune from './Templates/BlogTemplate'
import Whole from './components/Whole'
import Punefood from './Pages/Punefood'
import BestDebut from './Pages/BestDebut'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Whole/>} />
        <Route path="/blogs/Pune-food-recommendations/" element={<Punefood/>} />
        <Route path="/blogs/best-ODI-debut/" element={<BestDebut/>} />
      </Routes>
    </Router>
  )
}

export default App;
