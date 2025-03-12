import {Link,  useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import data from '../components/data.json'

export default function CountriesInfo() {
 const {name} = useParams()
 const [country, setCountry] = useState(null)
 useEffect(() => {
  const selectedCountry = data.find((item) => item.name === name)
  setCountry(selectedCountry)
 }, [name])
  
  // the page is routing but not rendering the country info
  return (
      <>
        <Link to='/Home' >
          <button className="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>  
            Back
          </button>  
        </Link>
        <section className="container">
          <div className="country-detail" style={{display: "flex", justifyContent: "space-between"}} >
            {country && (
              <>
                <img src={country.flags.png} alt="flag"  width={500} height={300}/>
                <h1>{country.name}</h1>
                <br />
                <div className="detail">
                  <p><span style={{fontWeight: "bold"}}>Native Name:</span>{country.nativeName}</p>
                  <p><span style={{fontWeight: "bold"}}>Population:</span>{country.population}</p>
                  <p><span style={{fontWeight: "bold"}}>Region:</span>{country.region}</p>
                  <p><span style={{fontWeight: "bold"}}>Sub Region:</span>{country.subregion}</p>
                  <p><span style={{fontWeight: "bold"}}>Capital:</span>{country.capital}</p>
                  <div>

                  <p><span style={{fontWeight: "bold"}}>Top Level Domain:</span>{country.topLevelDomain}</p>
                  {country.currencies.map((curr,index)=> (
                    <p key={index}>
                      <span style={{fontWeight: "bold"}}>Currencies:</span>
                      {curr.name}
                    </p>
                  ))}
                     <span style={{fontWeight: "bold"}}>Languages:</span>
                  {country.languages.map((lang,index) => (
                    <>
                      <p key={index}>
                        {lang.name}
                      </p>
                    </>
                  ))
                  }
                  </div>
                <p>
                  <span style={{fontWeight: "bold"}}>Border Countries:</span>
                  {`${country.borders} ,`}
                </p>
              

                </div>
              </>
            )}
          </div>
        </section>
      </>
  )
  
}
