import BannerImage from '../assets/images/banner.png'
import Logo from '../assets/images/logo.png'

export default function Hero() {
    return (
        <section class="h-screen bg-cover bg-center bg-fixed flex items-center bg-slate-100 z-20" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="w-full flex justify-evenly leading-6" >
                <div className="w-[30rem] text-white">
                    <h1 className='text-5xl py-3 font-semibold'>Java Café</h1>
                    <p className="text-md py-3 opacity-70">En este film velado en blanca noche el hijo tenaz de tu enemigo el muy verdugo cena distinguido una noche de cristal que se hace añicos</p>
                    <button className='bg-coffe-500 hover:bg-coffe-300 transition py-2 px-4 rounded-xl'>Preparar pedido</button>
                </div>
                <div className='w-96 p-5 '>
                    <img className="w-44" src={Logo}></img>
                </div>
            </div>
        </section>
    )
}