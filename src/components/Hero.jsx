import BannerImage from '../assets/images/banner.png'
import Logo from '../assets/images/logo.png'

export default function Hero() {
    return (
        <section class="h-screen bg-cover bg-center bg-fixed flex items-center bg-slate-100 z-20" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="w-full flex flex-wrap justify-evenly leading-6" >
                <div className=" w-96 p-5 text-white text-center md:text-start">
                    <h1 className='text-5xl py-3 font-semibold'>Java Café</h1>
                    <p className="text-md py-3 opacity-70">Somos una cafeteria de apasionados por la progrmación, podes disfrutar de todo nuestro menú inspirado en el mundo IT.</p>
                    <button className='text-lg bg-coffe-500 hover:bg-coffe-300 transition py-2 px-4 rounded-xl'>Preparar pedido</button>
                </div>
                <div className='w-96 p-5 hidden md:block'>
                    <img className="w-44 m-auto" src={Logo}></img>
                </div>
            </div>
        </section>
    )
}