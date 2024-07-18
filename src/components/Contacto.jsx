import { useEffect, useState } from "react"
import BGImage from '../assets/images/fondo_galeria.jpg'


export default function Contacto() {


    return (
        <section className="w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${BGImage})` }}>
            <h2 id="contacto" className='text-2xl pt-4 font-semibold text-center text-white'>Ubicación</h2>
            <div className="'w-full flex justify-start flex-wrap relative'">
                <div className="w-full h-screen p-12">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.427416513519!2d-58.64226542412563!3d-34.61863769848353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses!2sar!4v1721084688969!5m2!1ses!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}