import dataAlumnos from '../assets/data/dataAlumnos'
import iconPersona from '../assets/svg/person.svg'

import iconPhone from '../assets/svg/phone.svg'
import iconHorario from '../assets/svg/clock.svg'
import iconMaps from '../assets/svg/googlemaps.svg'
import iconMail from '../assets/svg/gmail.svg'




export default function Footer() {
    const contacto = [
        {
            icon:iconPhone,
            title:"Teléfono",
            desc: "11-2324-1123"
        },
        {
            icon:iconHorario,
            title:"Horario apertura",
            desc: "9:00 a 19:00"
        },
        {
            icon:iconMaps,
            title:"Dirección",
            desc: "Origone 151"
        },
        {
            icon:iconMail,
            title:"Mail",
            desc: "javacafe@gmail.com"
        },
    ]

    return (
        <footer className="w-full flex flex-wrap justify-evenly p-5 bg-coffe-1000 text-gray-300 text-sm">
            <div className="w-full md:w-1/3">
                <h4 className="text-md text-center font-bold mb-5">Integrantes</h4>
                <div className='flex flex-wrap justify-center'>
                {dataAlumnos.map((alumno, index) =>
                    <FooterItem key={index} title={alumno.nombre} subtitle={alumno.dni} icon={iconPersona}></FooterItem>)
                }
                </div>
            </div>    
            <div className='w-full pt-10 sm:pt-0 md:w-1/3'>
                <h4 className="text-md text-center font-bold mb-5">Contacto</h4>
                <div className='flex flex-wrap justify-center'>
                {contacto.map((contacto, index) =>
                    <FooterItem key={index} title={contacto.title} subtitle={contacto.desc} icon={contacto.icon}></FooterItem>)

                }
                </div>
            </div>
        </footer>
    )
}

const FooterItem = (props) => {
    return (
        <div className='flex flex-nowrap inline w-full justify-center sm:w-1/2 '>
            <div className='p-3 pb-6'>
                <img className="w-12 p-2" src={props.icon}></img>
            </div>
            <div className=''>
                <p className='my-3 font-semibold text-xs'>{props.title}</p>
                <p className='my-3 font-semibold text-xs'>{props.subtitle}</p>
            </div>
        </div>
    )
}
