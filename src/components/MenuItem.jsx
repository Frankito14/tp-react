export default function MenuItem(props) {
    return (
        <article className="relative w-64 text-white pb-1 bg-coffe-800 bg-opacity-90">
            <span className="text-md font-bold p-0.5 px-1 m-1 bg-green-700 absolute z-20">{'$'+props.precio}</span>
            <img className="sm:w-auto object-cover object-center backdrop-opacity-50 brightness-90" src={props.img} title={props.name} alt={"Plato " + props.name} />
            <div className='sm:w-auto pt-2'>
                <h3 className="text-md font-semibold text-center text-gray-100">{props.name}</h3>
                <div className="flex justify-center flex-nowrap text-lg gap-4 p-2 pt-3">
                    <button className="px-2 py-0.5 leading-3 font-bold rounded-full bg-white hover:bg-lime-600 transition text-coffe-800">+</button>
                    <span className="text-xl">0</span>
                    <button  className="px-2.5 py-0.5 leading-3 font-bold rounded-full bg-white hover:bg-rose-600 transition text-coffe-800">-</button>
                </div>
            </div>
        </article>
    );
}