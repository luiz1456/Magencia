import { useEffect, useState } from 'react'
import './style.css'

export default function Header(props) {

  const [srcImg, setSrcImg] = useState('assets/moon.png')
  useEffect(() => {
    setTimeout(() => {
      setSrcImg(props.darkActive ? 'assets/sun.png' : 'assets/moon.png')
    }, 250)
  }, [props.darkActive])

  const alterarTema = (element) => {
    props.setDarkActive(!props.darkActive)
    element.classList.add('animation-flip')
    setTimeout(() => {
      element.classList.remove('animation-flip')
    }, 500);
  }

  return (
    <header className={props.darkActive ? 'Header-dark-mode' : ''}>
      <img src="assets/logo.png" alt="logo" className='logo' />
      <button className='botao' onClick={(event) => alterarTema(event.currentTarget.firstChild)} ><img src={srcImg} alt="imagem botao" /></button>
    </header>
  )
}
