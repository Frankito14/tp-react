
export default function GaleriaItem(props) {
    return (
        <article className="relative w-64 text-white pb-1 bg-coffe-800 bg-opacity-80">
            <div className="text-xs flex flex-start flex-wrap gap-2 font-bold p-0.5 px-1 m-1 absolute z-20">
                {
                    props.ingredients.map(ingrediente => <span className="bg-slate-800 bg-opacity-70 p-1">{ingrediente}</span>)
                }
            </div>
            <img className="sm:w-auto object-cover object-center backdrop-opacity-50 brightness-90" src={props.img} title={props.title} alt={props.title} />
            <div className='sm:w-auto p-4'>
                <h3 className="text-lg pb-2 font-semibold text-center text-gray-100">{props.title}</h3>
                <p className="text-xs text-justify text-gray-100">{props.description}</p>
            </div>
        </article>
    );
}