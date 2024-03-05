import './style.css'
import AOS from 'aos'

export default function Card(props) {
  AOS.init({
    duration: 800,
  })
  return (
    <div className={props.darkActive ? 'card card-dark-mode aos-animate' : 'card aos-animate'}
      data-aos={props.nameAnimation} >
      <p>{props.data}</p>
      <h3>{props.titulo}</h3>
      <p>{props.empresa}</p>
      <p>{props.paragrafo}</p>
    </div>
  )
}
