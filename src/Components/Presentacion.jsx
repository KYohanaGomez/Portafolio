import './Presentacion.css';
import fondo from '../img/video.mp4';
import MiFoto from '../img/MiFoto2.jpg';
import { NavLink } from 'react-router-dom';
import logoMenu from '../img/menu.png'


const Presentacion = () => {

  return (
    <div className='contenedor'>

      <video autoPlay loop muted preload="auto" className="video-fondo">
        <source src={fondo} type="video/mp4" />
      </video>

      <div className='contenedorTex'>
        
        <div className='textos'>
          <div className='contenedorBoton'>
          <NavLink to="/navbar">
            <button><img  className='botoNav' src={logoMenu} alt="" /></button>
          </NavLink>

          </div>

          <h1 className='Hola'>!Hola!</h1>
          <p className='miNombreEs'>Mi nombre es</p>
          <h1>Kerly Yohana Gomez Giraldo</h1>
          <div className="MiFoto412">
            <img src={MiFoto} alt="MiFoto2" className='foto412' />
          </div>
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
    </div>

  )

}

export default Presentacion;