import toggleOn from '../components/images/toggle_on.png'
import toogle_off from '../components/images/toggle_off.png'
import Countries from './Countries'
import  data  from '../components/data.json'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Main() {
    const [country, setCountry] = useState(data)
    const getCountries = country.map(con => (
        <Countries
            key={nanoid()} 
            countryFlag={con.flags.png}
            countryName={con.name}
            Population={con.population}
            Region={con.region}
            Capital={con.capital}
        />
    ))
    // toggle background
    const [theme, setTheme] = useState(false)
    let backgroudChange = theme ? toggleOn : toogle_off
    const changeBackground = () => setTheme(!theme)
  return (
    <main className={theme ? "darkMode" : "lightMode"}>
        <header>
            <h1>Where is the World</h1>
            <div className="Mode">
                <button onClick={changeBackground}>
                    <img src={backgroudChange} alt="icon" width={50} />
                </button>
                <span>{theme ? "darkMode" : "lightMode"}</span>
            </div>
        </header>
        <section className='container'>
            <form>
                <button className='searchInput'>
                    <svg className="searchInput" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>       
                    </svg> 
                </button>
                <input type="text" 
                placeholder='Search for a country'
                name='searchCountry'
                />
            </form>
            <div className="filter">
                <button className="filter-btn">
                    <span>Filter by Regions</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg> 
                </button>
                <div className="regions">
                    <a href="#">Africa</a>
                    <a href="#">Asia</a>
                    <a href="#">America</a>
                    <a href="#">Europe</a>
                    <a href="#">Oceania</a>
                </div>
            </div>
        </section>
        <div className="countries">
            {getCountries}
        </div>
    </main>
  )
}
