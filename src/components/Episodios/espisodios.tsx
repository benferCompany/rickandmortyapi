import React from "react";
import { useGetData } from "../../hooks/useGetData";
import usePagination from "../../hooks/usePagination";
import { Link } from "react-router-dom";




interface Character {
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    created: String;
    url: String;

}


const Episodios = () => {
    const { startIndex, endIndex, handlePageChange, currentPage } = usePagination();
    const { data, error, loading } = useGetData<Character>(
        `https://rickandmortyapi.com/api/episode`
    );

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
    let datasResults = data.results.slice(startIndex, endIndex);





    return (
        <>
            <div className="row justify-content-center">
                {datasResults.map((elemento, index) => (
                    
                        <div className="card m-2" key={index} >
                            <div className="card-body">
                                <h5 className="card-title text-center">{elemento.name}</h5>
                                <p className="card-text"><strong>Episodio: </strong>{elemento.episode}</p>
                                <div><Link className="btn btn-success" to={"/episodio/"+elemento.id}>Ir a episodio</Link></div>
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

export default Episodios;