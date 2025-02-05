import Header from "./Header"
import {Link, Outlet, useParams } from "react-router-dom"
export default function CountriesInfo() {
  const {details} = useParams(names)
  console.log(details)
  return (
    
      <>
        <Header   />
        <section className="container">
          <Link to='/Home' className="back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>  
            Back
          </Link>
        
        </section>
        <Outlet />
      </>
  )
  
}
