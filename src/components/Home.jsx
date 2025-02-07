import { nanoid } from "nanoid"
import SearchCountry from './SearchCountry'
import { APIurl } from "./Config/config"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch(`${APIurl}/all?fields=flags,name,capital,population,continents`)
            .then(res => res.json())
            .then(data => setCountry(data))
    },[])
    console.log(country)
  return (
    <>
        <section className='container'>
            <SearchCountry setCountry={setCountry} />
        </section>
        <div className="countries">
            {   country.map(con3 => (
                    <div className="ListCountry" key={nanoid()}>
                        <Link to={`/country/${con3.name.common}` } >
                            <img src={con3.flags.png} alt="flag" />   
                            <div className="country-info">
                                <p>{`${con3.name.common}`}</p>
                                <p>{`Population: ${con3.population}`}</p>
                                <p>{`Region: ${con3.continents}`}</p>
                                <p>{`Capital: ${con3.capital}`}</p>
                            </div> 
                        </Link>
                    </div>
                ))
            }
        </div>
    </>
  )
}
