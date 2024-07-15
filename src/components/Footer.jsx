import dataAlumnos from '../assets/data/dataAlumnos'
import iconPersona from '../assets/svg/person.svg'

import iconPhone from '../assets/svg/phone.svg'
import iconMail from '../assets/svg/gmail.svg'
import iconMaps from '../assets/svg/googlemaps.svg'



export default function Footer() {
    const contacto = [
        {
            icon:iconPhone,
            desc: "11-2324-1123"
        },
        {
            icon:iconMail,
            desc: "cafejava@gmail.com"
        },
        {
            icon:iconMaps,
            desc: "Origone 151"
        },
    ]

    return (
        <footer className="w-full flex flex-wrap justify-start gap-5 p-5 bg-coffe-1000 text-gray-300 text-sm">
            <div className="md:w-1/2">
                <h4 className="text-lg text-center font-bold mb-5">Integrantes</h4>
                <div className='flex flex-wrap justify-center'>
                {dataAlumnos.map(alumno =>
                    <Alumno nombre={alumno.nombre} dni={alumno.dni}></Alumno>)
                }
                </div>
            </div>    
            <div className='md:1/2'>
                <h4 className="text-lg text-center font-bold mb-5">Contacto</h4>
                <div className='flex flex-wrap justify-center gap-4'>
                {contacto.map(contacto =>
                    <ContactoItem icon={contacto.icon} desc={contacto.desc}></ContactoItem>)
                }
                </div>
            </div>
        </footer>
    )
}

const Alumno = (props) => {
    return (
        <div className='flex flex-nowrap inline'>
            <div className='p-4 pb-6'>
                <img src={iconPersona}></img>
            </div>
            <div className=''>
                <p className='my-3 font-semibold text-md'>{props.nombre}</p>
                <p className='my-3 font-semibold text-md'>{props.dni}</p>
            </div>
        </div>
    )
}

const ContactoItem = (props) => {
    return (
        <div className=' flex flex-nowrap justify-center'>
            <div className='py-4'>
                <img className="w-8 pr-2" src={props.icon}></img>
            </div>
            <div className=''>
                <p className='my-3 font-semibold text-md'>{props.desc}</p>
            </div>
        </div>
    )
}