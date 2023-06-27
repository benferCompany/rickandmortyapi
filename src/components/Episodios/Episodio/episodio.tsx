import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import React from "react";
import PersonajeEpisodios from "../../Personajes/Personaje/personaje_episodios";

interface Character {
    name: string;
    air_date: string;
    episode: string;
    characters: [];
    created: String;
    url: String;

}

function Episodio() {
    const { id } = useParams();
    const { data, error, loading } = useGetData<Character>(
        `https://rickandmortyapi.com/api/episode/${id}`
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
                            
                            <div className="card-body">
                                <h2 className="card-text">Nombre: {data.name}</h2>
                                <h2 className="card-text">Episodios: {data.episode}</h2>
                                
                            </div>
                        </div>
                    </div>
                    <h4 className="m-5">Personajes que participaron en el capitulo</h4>
                    <div className="row justify-content-center">
                        
                        {data.characters.map((elemento, index) => (

                            <PersonajeEpisodios url={elemento}/>

                        ))}
                    </div>

                </>
            )}
        </div>
    );
}

export default Episodio;