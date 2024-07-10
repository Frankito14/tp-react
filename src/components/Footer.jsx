import dataAlumnos from '../assets/data/dataAlumnos'

export default function Footer() {
    return (
        <footer className="w-full flex flex-wrap justify-start gap-5 p-5 bg-coffe-900">
            <div className="w-96 text-sm text-gray-300">
                <h4 className="text-lg font-bold mb-5">Integrantes:</h4>
                {dataAlumnos.map(alumno => 
                <p className='my-3 font-semibold text-md'>{alumno.nombre} - {alumno.dni}</p>)
                }
            </div>
        </footer>
    )
}