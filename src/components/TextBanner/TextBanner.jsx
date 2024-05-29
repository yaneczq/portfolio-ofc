import "./index"
import "../../assets/styles/components/_textbanner.scss"
import Weather from "../Weather/Weather"

const TextBanner = () => {
  return (
    <div className="slider-container">

      <div className="text-slider">
          <p id="slider-text">I Lov€ Bitche$</p>
      </div>
          <Weather></Weather>
    </div>
  )
}

export default TextBanner