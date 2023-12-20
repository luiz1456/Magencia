import './style.css'

export default function Header(props) {
  return (
    <header className={props.darkActive ? 'Header-dark-mode' : ''}>
        <img src="assets/logo.png" alt="logo" className='logo' />
        <button className='botao' onClick={props.alterarTema} ><img src={props.darkActive ? 'assets/sun.png' : 'assets/moon.png'} alt="imagem botao" /></button>
    </header>
  )
}
