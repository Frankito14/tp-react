import { useState } from 'react'
import menu from '../assets/data/dataMenu'
import BannerImage from '../assets/images/banner-darker.png'

import MenuItem from './MenuItem'


export default function Menu() {

    const [pedidos, setPedidos] = useState([])

    const agregarPedido = (nuevoPedido) => {
    
        const pedidoBuscado = pedidos.find(pedido => pedido.id === nuevoPedido.id)
    
        if(pedidoBuscado){
            const index = pedidos.indexOf(pedidoBuscado)
            pedidos.splice(index, 1); 
        }
        if (nuevoPedido.cantidad === 0 )
            setPedidos([...pedidos])
        else
            setPedidos([...pedidos, nuevoPedido])
    }

    return (
        <section id='menu' className='w-full relative text-white bg-cover bg-center bg-fixed flex flex-wrap justify-center p-4' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='w-full md:w-2/3 '>
                <h3 className='text-2xl py-4 pb-8 font-semibold text-center'>Menú</h3>
                <div className='flex justify-center flex-wrap gap-5 '>
                    {menu.map(plato =>
                        <MenuItem key={plato.id} id={plato.id} name={plato.name} img={plato.img} precio={plato.precio} agregarPedido={agregarPedido} desc={plato.desc} link={plato.link} />
                    )}
                </div>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-2xl py-4 pb-8 font-semibold text-center'>Pedido</h3>
                <div className='flex justify-center flex-wrap gap-5  bg-neutral-900 bg-opacity-50 '>
                    {pedidos.map(pedido =>
                        <span key={pedido.id} className='block w-full m-auto font-semibold text-center text-lg p-2'>{`${pedido.name} x${pedido.cantidad} - $${pedido.precioUnidad * pedido.cantidad}`}</span>
                    )}
                    { (pedidos.length > 0)
                     ? <span className='block w-full m-auto text-center text-lg bg-green-700 font-bold p-2 bg-opacity-70'>{`Total: $${pedidos.reduce((acc, obj) => acc + (obj.precioUnidad*obj.cantidad), 0)}`}</span>
                     : <span className='block w-full m-auto text-center text-md font-medium p-2 opacity-90'>No hay pedidos seleccionados</span> 
                    }
                </div>
            </div>
        </section>
    )
}

