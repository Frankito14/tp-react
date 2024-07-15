import menu from '../assets/data/dataMenu'
import BannerImage from '../assets/images/banner.png'

import MenuItem from './MenuItem'

const Platos = () => {
    return(
        <div className='flex justify-center flex-wrap gap-5 '>
            {menu.map(plato =>
                <MenuItem name={plato.name} img={plato.img} precio={plato.precio}/>
            )}
        </div>
    )
}

export default function Menu() {
    return (
        <section id='menu' className='w-full bg-coffe-500 block text-white bg-cover bg-center bg-fixed z-20 flex flex-wrap justify-center p-4' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='w-full md:w-2/3 '>
                <h2 className='text-2xl py-4 pb-8 font-semibold text-center'>Menú</h2>
                <Platos></Platos>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-2xl py-4 pb-8 font-semibold text-center'>Pedido</h3>
                <div className='w-full p-4 bg-coffe-500'>
                    <h4>Cafe - $300</h4>
                </div>
            </div>
        </section>
    )
}

