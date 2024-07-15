import { useState } from "react"

export default function Navigator(){

    const [estaAbierto, setEstaAbierto] = useState(true)

    const abrirMenu = ()=>{
        setEstaAbierto(!estaAbierto)  
    }

    return(
        <nav className="w-full fixed sm:absolute bg-transparent text-white">
            <button className="relative sm:hidden" onClick={()=>{abrirMenu()}}>X</button>
            { 
            estaAbierto 
            ?<div className="flex flex-wrap justify-end w-full sm:gap-10 sm:p-5 absolute">
                <a href="#" className="w-full p-1 sm:w-auto text-center bg-coffe-500 sm:bg-transparent hover:text-coffe-300">Nosotros</a>
                <a href="#" className="w-full p-1 sm:w-auto text-center bg-coffe-500 sm:bg-transparent hover:text-coffe-300">Menú</a>
                <a href="#" className="w-full p-1 sm:w-auto text-center bg-coffe-500 sm:bg-transparent hover:text-coffe-300">Galeria</a>
                <a href="#" className="w-full p-1 sm:w-auto text-center bg-coffe-500 sm:bg-transparent hover:text-coffe-300">Contacto</a>
           </div>
           :<></>
            }
        </nav>
    )
}