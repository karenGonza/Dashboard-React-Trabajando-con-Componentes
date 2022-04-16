import React from 'react'
import Genre from './Genre';

const GenresInDb = () => {

  /* Antes de retornar el componente creo un array que contendrá todos los nombres de los géneros,
  ahora lo tenemos como array pero después vendrá como un pedido a la base de datos a travéz de un fetch.
  Esos cambios lo tendrá el componente padre, que le pasará los datos al componente hijo.
  El componente hijo Genre es el que se repetirá varias veces  */
  const genres = ['Acción', 'Animación', 'Aventura', 'Ciencia Ficción', 'Comedia', 'Documental', 'Drama', ' Fantasia', 'Infantiles', 'Musical']

  return (
    /*<!-- Genres in DB -->*/
    <div className="col-lg-6 mb-4">						
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <Genre
            genres = {genres}
          />
          {/* A este componente le pasaré por props el array */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default GenresInDb;