import './style.css'

import React from 'react'

export default function Footer(props) {
    return (
        <footer className={props.darkActive ? 'footer-dark-mode' : ''}>
            <div className='container-footer'>
                <img src="assets/logo.png" alt="logo" className='logo' />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.
                </p>
                <div className='container-tecnologias'>
                    <img src="assets/facebook.png" alt="facebook" />
                    <img src="assets/twitter.png" alt="twitter" />
                    <img src="assets/linkedin.png" alt="linkedin" />
                    <img src="assets/dribble.png" alt="dribble" />
                    <img src="assets/behance.png" alt="behance" />
                    <img src="assets/google-plus.png" alt="g-plus" />
                </div>
            </div>
                <div className="copyright">
                    <p>Copyright 2023 <span>Luiz Rodrigo</span></p>
                </div>
        </footer>
    )
}
