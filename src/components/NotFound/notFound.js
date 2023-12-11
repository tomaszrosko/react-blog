import {Link} from "react-router-dom";
import './notFound.scss'

export default function NotFound() {
  return (
    <div className={"c-not-found"}>
        <h1>Nie ma takiej strony do wyświetlenia</h1>
        <p>Skontaktuj się z Administratorem</p>
        <Link to='/' className={"btn btn-dark"}>Wróć</Link>
    </div>
  )
}
