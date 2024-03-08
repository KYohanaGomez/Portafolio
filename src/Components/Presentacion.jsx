import './Presentacion.css';
import fondo from '../img/video.mp4';
import MiFoto from '../img/MiFoto2.jpg';
import logoGitGub from '../img/GitHub3.png';
import logoLinkend from '../img/linkedin.svg'
import logoWhatsap from '../img/Whatsaap.png'
//import { useEffect } from 'react';


const Presentacion = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className='contenedor'>
      
      <video autoPlay loop muted preload="auto" className="video-fondo">
        <source src={fondo} type="video/mp4" />
      </video>


      <div className='contenedorTex'>
        <div className='textos'>
          <h1 className='Hola'>!Hola!</h1>
          <div className="MiFoto412">
          <img src={MiFoto} alt="MiFoto2" className='foto412' />
        </div>
          <p className='miNombreEs'>Mi nombre es</p>
          <h1>Kerly Yohana Gomez Giraldo</h1>
          <h1>💻 Desarrolladora Full Stack</h1>
          <p className='texto'>¡Bienvenido(a) a mi portafolio digital!
            Aquí encontrarás una muestra de mis proyectos,
            trabajos y logros que reflejan mi trayectoria
            profesional y creativa. Cada elemento representa
            dedicación, aprendizaje y compromiso. Te invito a
            explorar este espacio y sumergirte en el mundo de
            mi trabajo. ¡Espero que disfrutes del recorrido y
            encuentres inspiración!</p>
        </div>

        <div className="MiFoto">
          <img src={MiFoto} alt="MiFoto" className='foto' />
        </div>

      </div>
      <div className='contenedor-proyect'>
        <p className='proyect'>
          Proyectos
        </p>
           <a href="https://sportvibe.up.railway.app" target="_blank">
        <p className='proyectLet'>
          🟢 Sportvibe
        </p>
        </a>
       
          <a href="https://github.com/KYohanaGomez/Proyecto_PI.git" target="_blank">
        <p className='proyectLet'>
        🟢 Countries
        </p>
          </a>
          <a href="https://github.com/KYohanaGomez/Proyecto_Integrador.git" target="_blank">
        <p className='proyectLet'>
        🟢 RickAndMorty
        </p>
          </a>
      </div>
      <div className='contenedor-redes'>
        <p>
        <a href="https://github.com/KYohanaGomez"  target="_blank">
            <img src={logoGitGub} alt="logo GitGub" className="logoGit" />
          </a>
        </p>
        <p>
        <a href="https://www.linkedin.com/in/kerly-yohana-gomez-giraldo-65a124276/"  target="_blank">
            <img src={logoLinkend} alt="logo Linkedlin" className="logoLinked" />
          </a>
        </p>
        <p>
        <a href=" https://w.app/672MIa"  target="_blank">
            <img src={logoWhatsap} alt="logo Whasaap" className="logoWhasaap" />
          </a>
        </p>
        
      </div>



    </div>

  )

}

export default Presentacion;