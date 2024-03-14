import React from 'react'
import Header from './components/Header/Header'
import About from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Skill from './components/Skill/Skill'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Certificate from './components/Certificate/Certificate'
import './App.css'

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <About />
            <Skill />
            <Portfolio />
            <Certificate />
            <Contact />
            <Footer />
            <Nav />
        </>
    )
}

export default App
