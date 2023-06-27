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

function PersonajeEpisodios({ url }) {

    const { data, error, loading } = useGetData<Character>(
        `${url}`
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
                    
                    <div className="card m-2" >
                        <img className="card-img-top" src={data.image} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{data.name}</h5>
                            <p className="card-text"><strong>Estado: </strong>{data.status}</p>
                            <p className="card-text"><strong>Especie: </strong>{data.species}</p>
                            <p className="card-text"><strong>Genero: </strong>{data.gender}</p>

                            <div className="text-center"><Link to={"/personaje/" + data.id} className="btn btn-primary">Detalles del personaje</Link></div>
                        </div>
                    </div>
                
                </>
            )}
        </div>
    );
}

export default PersonajeEpisodios;