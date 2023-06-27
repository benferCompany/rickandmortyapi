import React from "react";
import { useGetData } from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import usePagination from "../../hooks/usePagination";

interface Character {
    name: String;
    type: String;
    dimension: String;
    residents: String;

}

function Ubicaciones() {
    const { data, error, loading } = useGetData<Character>("https://rickandmortyapi.com/api/location/");
    const { startIndex, endIndex,handlePageChange,currentPage } = usePagination();
    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (error) {
        return (
            <>
                <h1>Error en la petición!!</h1>
                <p>{error}</p>
            </>
        );
    }
    console.log(data)
    return (
        <>
            <div className="row justify-content-center">
                {data.results.slice(startIndex,endIndex).map((elemento, index) => (

                    <div className="card m-2" key={index} >
                        <div className="card-body">
                            <h5 className="card-title text-center">{elemento.name}</h5>
                            <p className="card-text"><strong>Tipo: </strong>{elemento.type}</p>
                            <p className="card-text"><strong>Estado: </strong>{elemento.dimension}</p>
                            <div className="text-center"><Link to={"/ubicacion/" + elemento.id} className="btn btn-primary">Ir a ubicación</Link></div>
                        </div>
                    </div>

                ))}

            </div>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li onClickCapture={() => handlePageChange(currentPage - 1, data.results)} className="page-item"><a className="page-link" href="#">Anterior</a></li>
                        <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
                        <li onClick={() => handlePageChange(currentPage + 1, data.results)} className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                    </ul>
                </nav>

            </div>
        </>
    );
}

export default Ubicaciones;