import "./Navbar.css";
import fondo from '../img/video.mp4';
import logoGitGub from '../img/GitHub3.png';
import logoLinkend from '../img/linkedin.svg';
import logoWhatsap from '../img/Whatsaap.png';
import { NavLink } from "react-router-dom";


const Navbar = () => {

    return (

        <div className='contenedor-de-todo'>

            <video autoPlay loop muted preload="auto" className="video-fondo">
                <source src={fondo} type="video/mp4" />
            </video>
            <div className='contenedor-proyect'>
                <NavLink className='flecha' to='/'>
                    <button>←</button>
                </NavLink>
                <p className='proyect'>
                    Proyectos
                </p>
                <a href="https://sportvibe.up.railway.app" target="_blank">
                    <p className='proyectLet'>
                        🟢 SportVibe
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
                    <a href="https://github.com/KYohanaGomez" target="_blank">
                        <img src={logoGitGub} alt="logo GitGub" className="logoGit" />
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/kerly-yohana-gomez-giraldo-65a124276/" target="_blank">
                        <img src={logoLinkend} alt="logo Linkedlin" className="logoLinked" />
                    </a>
                </p>
                <p>
                    <a href=" https://w.app/672MIa" target="_blank">
                        <img src={logoWhatsap} alt="logo Whasaap" className="logoWhasaap" />
                    </a>
                </p>

            </div>
        </div>
    )
}

export default Navbar;