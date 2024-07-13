import FondoHistoria from '../assets/images/fondo_historia.jpg'

export default function Historia() {
    return (
        <section className='w-full flex justify-start flex-wrap relative'>
            <div className="w-full md:w-1/2 bg-coffe-900">
                <div className="leading-6 text-white p-10 opacity-100" id='Historia'>
                    <h2 className='text-2xl py-3 font-semibold text-center'>Filosofia</h2>
                    <iframe class="w-full md:w-3/4 m-auto aspect-video p-5" src="https://www.youtube.com/embed/OUx-_oQCZrI?si=2jJmBCqOTVo5ETFi"></iframe>
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-cover bg-center bg-fixed " style={{ backgroundImage: `url(${FondoHistoria})` }}>
                <div className="leading-6 text-white p-10" id='Historia'>
                    <h2 className='text-2xl py-3 font-semibold text-center'>Historia</h2>
                    <p className="text-md p-10 opacity-80">La última joda, la paga el señor Que le divierten las penas, ajenas de hoy La última moda la impone el señor Marcándome la tendencia, demencia de hoy El tiene todo, lo que hoy precisás Y los infantes se parten el alma por más El te cautiva, mostrando a su dios Que no es el tuyo, pero juega para los dos...</p>
                </div>
            </div>     
        </section>
    )
}
