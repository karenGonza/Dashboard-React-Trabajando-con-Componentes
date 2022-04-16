import React from 'react'

/* hago un destructuring al objeto que está llegando*/
const Genre = ({genres}) => {
    return (
    /* recorro con un map genres que estoy recibiendo por props y al recorrer dibujo cada bloque,
    pero tiene que haber un return del map(return implícito)*/
        genres.map((genre, index) => (
        <div className="col-lg-6 mb-4" key={index + genre}>{/* key hiria en la caja que contiene a todo el elemento hijo */}
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    {genre} 
                </div>
            </div>
        </div>
       ))
    )
}

export default Genre;
/* Quiero recorrer un array y usar este componente el cual recibirá por props los parámetros, lo tome de GenressInDb en donde son 10 los generos.
Entonces recibirá información por props el componente hijo y recorrerá por maps */