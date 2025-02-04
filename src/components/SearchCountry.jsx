import React from 'react'
import data from "./data.json"
export default function SearchCountry(props) {
    // search Input
    const seachInput = (event) => {
        const search = event.target.value
        const getNames = data.filter(con3_Names => con3_Names.name.toLowerCase().includes(search))
       props.setCountry(getNames)
    }
    // filter
    const filterCountry = (Region) => {
        const filter = data.filter(getRegion => getRegion.region === Region)
       props.setCountry(filter)
    } 
  return (
    <>
        <form>
            <button className='searchInput'>
                <svg className="searchInput" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>       
                </svg> 
            </button>
            <input type="text" 
                placeholder='Search for a country'
                name='searchCountry'
                onChange={seachInput}
            />
        </form>
        <div className="filter-dropdown">
            <button className="filter-btn">
                Filter by Regions
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg> 
            </button>
            <div className="dropdown-regions">
                <a href="#" className='regionlist' onClick={() => filterCountry('Africa')}>Africa</a>
                <a href="#" className='regionlist' onClick={() => filterCountry('Asia')}>Asia</a>
                <a href="#" className='regionlist' onClick={() => filterCountry('Americas')}>America</a>
                <a href="#" className='regionlist' onClick={() => filterCountry('Europe')}>Europe</a>
                <a href="#" className='regionlist' onClick={() => filterCountry('Oceania')}>Oceania</a>
            </div>
        </div>
    </>
  )
}
