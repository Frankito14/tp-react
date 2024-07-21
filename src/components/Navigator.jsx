import { useState } from "react"
import 'animate.css';


export default function Navigator() {

    const seMuestraBurgerMenu = window.screen.width < 640
    const [estaActivo, setEstaActivo] = useState(false);

    if (!estaActivo && seMuestraBurgerMenu)
        return (
            <nav className='w-full bg-transparent text-black flex flex-items justify-end gap-2 fixed top-0 z-50 animate__animated  animate_faster'>
                <svg onClick={() => { setEstaActivo(!estaActivo) }} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-12 p-2 hover:cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </nav>
        )
    else
        return (
            <nav className='w-full bg-coffe-900 sm:bg-transparent flex flex-items justify-end flex-wrap gap-2 text-white fixed sm:absolute top-0 z-20 animate__animated animate__fadeInDown'>
                <svg onClick={() => { setEstaActivo(!estaActivo) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 p-2 hover:cursor-pointer sm:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                <div className="w-full flex flex-wrap flex-items justify-end gap-4 sm:p-4 text-center text-md">
                    <a href="/#nosotros"  className="w-full block p-1 sm:w-auto sm:inline sm:bg-transparent hover:text-coffe-300 hover:cursor-pointer">Nosotros</a>
                    <a href="/#menu"      className="w-full block p-1 sm:w-auto sm:inline sm:bg-transparent hover:text-coffe-300 hover:cursor-pointer">Menú</a>
                    <a href="/#galeria"   className="w-full block p-1 sm:w-auto sm:inline sm:bg-transparent hover:text-coffe-300 hover:cursor-pointer">Galeria</a>
                    <a href="/#contacto"  className="w-full block p-1 sm:w-auto sm:inline sm:bg-transparent hover:text-coffe-300 hover:cursor-pointer">Ubicación</a>
                </div>
            </nav>
        )
}