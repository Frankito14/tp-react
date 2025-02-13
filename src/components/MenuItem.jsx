import { useState } from "react";

export default function MenuItem(props) {

    const [cantidad, setCantidad] = useState(0)

    const actualizarCantidad = (cantidad)=>{
        cantidad = (cantidad < 0) ? 0 : (cantidad > 99) ? 99 : cantidad
        setCantidad(cantidad)
        props.agregarPedido({id:props.id, name:props.name, precioUnidad:props.precio, cantidad:cantidad})
    }

    return (
        <article className="relative w-64 text-white pb-1 bg-neutral-900 bg-opacity-50">
            <span className="text-md font-bold p-0.5 px-1 m-1 bg-green-700 absolute z-10">{'$'+props.precio}</span>
            <a href={props.link} target="_blank">
                <img className="sm:w-auto object-cover object-center backdrop-opacity-50 brightness-90" src={props.img} title={"Ver preparación de " + props.name} alt={props.name} />
            </a>
            <div className='sm:w-auto pt-2'>
                <h3 className="text-md font-semibold text-center text-gray-100">{props.name}</h3>
                <p className="text-sm text-center text-gray-200 p-2">{props.desc}</p>
                <div className="flex justify-center flex-nowrap text-lg gap-4 p-2 pt-3">
                    <button onClick={()=>{actualizarCantidad(cantidad-1)}} className="px-2.5 py-0.5 leading-3 font-bold rounded-full  text-rose-600 bg-white enabled:hover:bg-rose-600 enabled:hover:text-white disabled:opacity-50 transition" disabled={cantidad === 0}>-</button>
                    <span className="text-xl font-semibold">{cantidad}</span>
                    <button onClick={()=>{actualizarCantidad(cantidad+1)}} className="px-2 py-0.5 leading-3 font-bold rounded-full text-lime-600 bg-white enabled:hover:bg-lime-600 enabled:hover:text-white disabled:opacity-50 transition" disabled={cantidad >= 99}>+</button>
                </div>
            </div>
        </article>
    );
}