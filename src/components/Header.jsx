import toggleOn from '../components/images/toggle_on.png'
import toogle_off from '../components/images/toggle_off.png'
export default function Header({theme, changeBackground}) {
  let backgroudChange = theme ? toggleOn : toogle_off
   
  return (
    <main >
      <header>
        <h1>Where is the World</h1>
        <div className="Mode">
          <button onClick={changeBackground}>
            {/* toggle images */}
            <img src={backgroudChange} alt="icon" width={50} />
          </button>
          <span>{theme ? "darkMode" : "lightMode"}</span>
        </div>
      </header>

    </main>
  )
}
