import React from 'react'
import ContentMovies from './ContentMovies';

const ContentRowMovies = () => {

    let data = [
        /* array y dependiendo de cuantos elementos tenga tendré tantos componentes contentMovies dibujado*/
        {
            
            title: 'Movies in Data Base',
            color: 'primary', 
            value: 21,
            icon: 'fa-film',
        },
        {
            title: 'Total awards',
            color: 'success', 
            value: 79,
            icon: 'fa-award',
        },
        {
            title: 'Actors quantity',
            color: 'warning',
            value: 49,
            icon: 'fa-user',
        }
    ]

    return (
    /*<!-- Content Row Movies-->*/
    <div className="row">
        {/* hacemos un map de data para que recorra todo el arrary y a diferencia de un forEach me traiga un resultado */}
        {
            data.map((item, i) => (
                <ContentMovies 
                    color={item.color}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                    key={item.title + i}/* para que no tire errores, usamos la key */
                />
                
            ))/* la i hace referencia a la posición del objeto, 
            y si abro llaves dentro de map y en el entorno de react, si o si va un return sino, no funciona.
            Pero si uso parentesis ya no haria falta el return por delante, linea 35 */
        }
           {/* <ContentMovies color="primary"/> Esto podria llegar a ser una manera, le paso la propiedad pero el valor de dicha propiedad cambia*/}

    </div>
    /*<!-- End movies in Data Base -->*/

  )
}


export default ContentRowMovies;