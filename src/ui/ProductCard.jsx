
export const ProductCard = ({ id_producto, obtenerProductoIndividual, imagen, titulo, descripcion }) => {

    const visualizarDetalles = () => {
        obtenerProductoIndividual(id_producto);
    }

    return (
        <div onClick={visualizarDetalles} className="hover:opacity-80 transition-opacity duration-300 cursor-pointer flex flex-wrap justify-center m-3 w-80 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div>
                <img className="rounded-t-lg h-72 w-screen" src={imagen} alt="" />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">{titulo}</h5>
                <p className=" font-normal text-gray-700">{descripcion}</p>
            </div>
        </div>
    );
};