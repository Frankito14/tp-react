import menu from '../assets/data/dataMenu'
import BannerImage from '../assets/images/banner.png'

import MenuItem from './MenuItem'

export default function Menu(){
    return(
        <section id='menu' className='w-full bg-coffe-500 block text-white bg-cover bg-center bg-fixed z-20' style={{backgroundImage: `url(${BannerImage})`}}>
             <h2 className='text-2xl py-3 font-semibold text-center'>Menú</h2>
             <div className='w-full sm:w-4/6 m-auto flex justify-center flex-wrap gap-5 p-5'>
                {menu.map(plato => 
                    <MenuItem name={plato.name} img={plato.img}/>
                )}
             </div>
        </section>
    )
}