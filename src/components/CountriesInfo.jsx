import {Link,  useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../components/data.json'

export default function CountriesInfo() {
 const {area} = useParams()
 const [country, setCountry] = useState(null)
 useEffect(() => {
  const selectedCountry = data.find((item) => item.area === parseInt(area))
  setCountry(selectedCountry)
 }, [area])
  
  // the page is routing but not rendering the country info
  return (
    
      <>
        <section className="container">
          <Link to='/Home' className="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>  
            Back
          </Link>
          {country && (
            <div className="country-detail">
              <h1>{country.name}</h1>
              {/* <img src={country.flags.png} alt="flag"  width={500} height={300}/> */}
            </div>
          )}
        </section>
      </>
  )
  
}
