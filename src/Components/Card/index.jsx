import './style.css'

export default function Card(props) {
  return (
    <div className={props.darkActive ? 'card card-dark-mode' : 'card'}>
      <p>{props.data}</p>
      <h3>{props.titulo}</h3>
      <p>{props.empresa}</p>
      <p>{props.paragrafo}</p>
    </div>
  )
}
