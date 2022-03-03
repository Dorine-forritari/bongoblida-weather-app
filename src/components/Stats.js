// styles
import './Stats.css';

export default function Stats({ language, temp, clouds, wind, type }) {
  return (
    <div className="stats__wrap">
      {language 
        ? <div className="stats">
            <h3>The weather in Reykjavik</h3>
            <div className="stats__flex-container">
              <div className="stats__icon">
                <p><i class="fa-solid fa-temperature-half"></i></p>
                <p><i class="fa-solid fa-cloud"></i></p>
                <p><i class="fa-solid fa-wind"></i></p>
                <p><i class="fa-solid fa-cloud-sun-rain"></i></p>
              </div>
              <div className="stats__description">
                <p>temperature in celsius: {temp} </p>
                <p>percentage clouded: {clouds}</p>
                <p>wind speed in m/s: {wind}</p>
                <p>weather type: {type}</p>
              </div>
            </div>
          </div>
        : <div className="stats">
            <h4>Veðrið í Reykjavík</h4>
            <div className="stats__flex-container">
            <div className="stats__icon">
                <p><i class="fa-solid fa-temperature-half"></i></p>
                <p><i class="fa-solid fa-cloud"></i></p>
                <p><i class="fa-solid fa-wind"></i></p>
                <p><i class="fa-solid fa-cloud-sun-rain"></i></p>
              </div>
              <div className="stats__description">
                <p>hitastig í celsíus: {temp} </p>
                <p>hlutfall skýjað: {clouds}</p>
                <p>vindur í m/s: {wind}</p>
                <p>lýsing: {type}</p>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

