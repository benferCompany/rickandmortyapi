import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';




interface Character {
    name: string;
    dimension: String;
    type: string;
    created: String;

}
function Ubicacion() {

    const convertirFecha = (fechaString) => {
        const fecha = parseISO(fechaString);
        const fechaFormateada = format(fecha, "dd 'de' MMMM 'de' yyyy - hh:mm a", { locale: es });
        return fechaFormateada;
    };
    const { id } = useParams();
    const { data, error, loading } = useGetData<Character>(
        `https://rickandmortyapi.com/api/location/${id}`
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
    console.log(data);
    return (

        <div>
            {data && (
                <>
                    <div className="card w-50 m-5">
                        <div className="d-flex">
                            <div className="card-body">
                                <h5 className="card-title">Id: {data.id}</h5>
                                <p className="card-text">Nombre: {data.name}</p>
                                <p className="card-text">Tipo: {data.type}</p>
                                <p className="card-text">Dimensión: {data.dimension}</p>
                                <p className="card-text">Creado: {convertirFecha(data.created)}</p>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>

    );
}

export default Ubicacion;