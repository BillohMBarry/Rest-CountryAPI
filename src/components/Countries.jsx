
export default function Countries(props) {
  return (
    <>
        <div className="ListCountry">
            <img src={props.countryFlag} alt="flag" />
            <div className="country-info">
                <h1>{props.countryName}</h1>
                <p>{`Population: ${props.Population}`}</p>
                <p>{`Region: ${props.Region}`}</p>
                <p>{`Capital: ${props.Capital}`}</p>
            </div>
        </div>
    </>
  )
}
