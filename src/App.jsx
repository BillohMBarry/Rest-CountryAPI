import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CountriesInfo from './components/CountriesInfo'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [theme, setTheme] = useState(false)
      // toggle background
      const changeBackground = () => setTheme(pretheme => !pretheme)
     
  return (
    <main className={theme ? 'darkMode' : 'lightMode'}>
      <Header theme={theme} changeBackground={changeBackground}/>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path="/country/:name" element={<CountriesInfo />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
