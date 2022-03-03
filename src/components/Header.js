//styles
import './Header.css';

export default function Header({ language }) {
  return (
    <div className="header">
      {language 
        ? <h1>Is it summer weather in Reykjavik? <i class="fa-solid fa-martini-glass-citrus"></i></h1>
        : <h1>Er Bongóblíða í Reykjavík? <i class="fa-solid fa-martini-glass-citrus"></i></h1>
      }
    </div>
  )
}
