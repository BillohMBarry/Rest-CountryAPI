import { nanoid } from "nanoid"
import SearchCountry from './SearchCountry'
import data from "../components/data.json"
import { useState } from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    const [country, setCountry] = useState(data)
  
  return (
    <>
        <section className='container'>
            <SearchCountry setCountry={setCountry} />
        </section>
        <div className="countries">
            {   country.map((con3, index) => (
                    <div className="ListCountry" key={index}>
                        <Link to={`/country/${con3.area}` } >
                            <img src={con3.flags.png} alt="flag" />   
                            <div className="country-info">
                                <p>{`${con3.name}`}</p>
                                <p>{`Population: ${con3.population}`}</p>
                                <p>{`Region: ${con3.region}`}</p>
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
