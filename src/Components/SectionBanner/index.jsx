import './style.css'

export default function SectionBanner(props) {

  return (
    <section className={props.darkActive ? 'sectionBanner sectionBanner-dark-mode' : 'sectionBanner'}>
      <img src="assets/banner.png" alt="imagem banner" className='imgBanner' />
      <div className='containerTextoBanner'>
        <div>
          <p>BRANDING / UI / UX / TECNOLOGIA</p>
          <h1>Agência de Branding</h1>
          <span>e design digital</span>
        </div>
      </div>
    </section>
  )
}
