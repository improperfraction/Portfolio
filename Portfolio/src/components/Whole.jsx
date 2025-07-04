import { useState } from 'react'

import About from './experience'
import Blog from './Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'

function Whole() {
    return (
        <>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Blog></Blog>
        </>
    )
}

export default Whole;