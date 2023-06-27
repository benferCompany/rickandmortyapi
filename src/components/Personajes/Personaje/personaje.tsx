import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import React from "react";

interface Character {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
}

function Personaje() {
    const { id } = useParams();
    const { data, error, loading } = useGetData<Character>(
        `https://rickandmortyapi.com/api/character/${id}`
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
    console.log(data.origin);
    return (
        <div>
            {data && (
                <>
                    <div className="card m-5">
                        <div className="d-flex">
                            <img className="card-img-top w-25" src={data.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Id: {data.id}</h5>
                                <p className="card-text">Nombre: {data.name}</p>
                                <p className="card-text">Estado: {data.status}</p>
                                <p className="card-text">Especie: {data.species}</p>
                                <p className="card-text">Tipo: {data.type}</p>
                                <p className="card-text">Genero: {data.gender}</p>
                                <p className="card-text">Origen: {data.origin.name}</p>
                                
                                <Link to={"/ubicacion/"+data.id} className="btn btn-primary">Detalles de origen</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Personaje;