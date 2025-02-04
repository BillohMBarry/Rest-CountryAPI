import './App.css'
import Home from './components/Home'
import CountriesInfo from './components/CountriesInfo'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/Home' element={<Home />} />
        <Route path='/:country' element={<CountriesInfo />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
