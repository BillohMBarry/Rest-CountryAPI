
import Header from './Header'
import Countries from './Countries'
import SearchCountry from './SearchCountry'
import  data  from './data.json'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Home() {
    const [country, setCountry] = useState(data)
       // toggle background
  const [theme, setTheme] = useState(false)
  function changeBackground() {
    setTheme(pretheme => !pretheme)
 }
    
    const getCountries = country.map(con => (
        <>
            <Countries
            // some countries return undefine
            // handling the undefined value with the optional chaining and nullish coalescing operation 
            // to return an empty array instead of undefined
            key={nanoid()}
            countryFlag={con.flags.png}
            countryName={con.name}
            Population={con.population}
            Region={con.region}
            Capital={con?.capital ?? []}
        
            />
        </>
    )) 
  
  return (
    <main className={theme ? 'darkMode' : 'lightMode'}>
        <Header theme={theme} changeBackground={changeBackground}/>
        <section className='container'>
            <SearchCountry setCountry={setCountry}/>
        </section>
        <div className="countries">
            {getCountries}
        </div>
    </main>
  )
}
