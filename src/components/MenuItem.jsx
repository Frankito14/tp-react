export default function MenuItem(props) {
    return (
        <article className="relative w-full sm:w-64 relative text-white pb-1 flex flex-wrap justify-center gap-1 rounded-b-md bg-coffe-800 bg-opacity-90">
            <div className="absolute blur-3xl bg-opacity-10 bg-my-primary-200 rounded w-36 h-36 top-[50%]"></div>
            <img className="w-full sm:w-96 object-cover object-center rounded-t-md backdrop-opacity-50" src={props.img} title={props.name} alt={"Plato " + props.name} />
            <div className='w-full sm:w-96 pt-2'>
                <h3 className="text-md font-semibold text-center text-gray-100">{props.name}</h3>
                <div className="flex justify-center flex-nowrap text-lg gap-4 p-2 pt-4">
                    <button className="px-2 py-0.5 leading-3 font-bold rounded-full bg-white hover:text-coffe-500 text-coffe-800">+</button>
                    <span className="text-xl">0</span>
                    <button  className="px-2.5 py-0.5 leading-3 font-bold rounded-full bg-white hover:bg-amber-500 text-coffe-800">-</button>
                </div>
            </div>
        </article>
    );
}