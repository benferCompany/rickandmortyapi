import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import React, { useState } from "react";
import usePagination from "../../hooks/usePagination";

interface Character {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

function Personajes() {
    
    const { startIndex, endIndex,handlePageChange,currentPage } = usePagination();

    const { data, error, loading } = useGetData<Character>(
        `https://rickandmortyapi.com/api/character/`
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
                        <img className="card-img-top" src={elemento.image} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{elemento.name}</h5>
                            <p className="card-text"><strong>Estado: </strong>{elemento.status}</p>
                            <p className="card-text"><strong>Especie: </strong>{elemento.species}</p>
                            <p className="card-text"><strong>Genero: </strong>{elemento.gender}</p>

                            <div className="text-center"><Link to={"/personaje/" + elemento.id} className="btn btn-primary">Detalles del personaje</Link></div>
                        </div>
                    </div>

                ))}

            </div>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li onClickCapture={() => handlePageChange(currentPage - 1,data.results)} className="page-item"><a className="page-link" href="#">Anterior</a></li>
                        <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
                        <li onClick={() => handlePageChange(currentPage + 1,data.results)} className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                    </ul>
                </nav>



            </div>
        </>
    );



}

export default Personajes;