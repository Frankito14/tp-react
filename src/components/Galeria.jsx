import { useEffect, useState } from "react"
import GaleriaItem from "./GaleriaItem";
import BGImage from '../assets/images/fondo_galeria.jpg'


export default function Galeria(){

    const [galeria, setGaleria] = useState([])

    useEffect(()=>{
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => response.json())  
	    .then((json) => {setGaleria(json); console.log(json)})
    },[])

    return(
        <section className="w-full bg-cover bg-center bg-fixed bg-coffe-900">
            <h2 className='text-2xl py-4 pb-8 font-semibold text-center text-white'>Galeria</h2>
            <div className="w-full flex flex-wrap justify-center gap-4 p-2">
                {galeria.map(item => <GaleriaItem title={item.title} description={item.description} img={item.image} ingredients={item.ingredients} />)}
            </div>

        </section>
    )
}