// styles
import './Answer.css'

export default function Answer({ language, summerWeather }) {
  return (
      <div>
        {language 
          ? <div className="answer">{summerWeather ? <p>Yes, enjoy!</p> : <p>No, unfortunately not.</p> }</div>
          : <div className="answer">{summerWeather ? <p>Já, njóttu þess!</p> : <p>Nei, því miður ekki.</p> }</div>
        }
      </div>
    )
}
