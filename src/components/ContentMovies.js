import React from 'react';
import PropTypes from 'prop-types';

const ContentMovies = ({color, title, value, icon}) => { /* podria hacer un destructuring aca, dentro de los paréntesis ({color}) */
    return (

        /*<!-- Movies in Data Base -->*/
        <div className="col-md-4 mb-4">
            {/* Y en la siguiente linea de código hariamos un className=`card border-left-${color} shadow h-100 py-2` hiria entonces todo 
            dentro de bastik y le pasariamos la clave, asi cambiaria el color de las 3 cajas que son iguales*/}
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

ContentMovies.propTypes = { /* Esto me funcionaria como validación también, en donde en este caso iria string, si pasa otro valor rompe,
    y como algunos de estos valores son requeridos y si no los encuentra, va a renderizar pero habran errores en la consola, me dirá que está indefinido */
    color : PropTypes.string.isRequired, 
    title : PropTypes.string.isRequired,
    value : PropTypes.number,
    icon : PropTypes.string
} 

ContentMovies.defaultProps = {
    color : 'dark' /* Es requerido, en el caso de que no estuviera en el array data, quedará este color por default */
}

export default ContentMovies;

/* Instalación: npm install prop-types en terminal, lo requerimos acá
en el componente hijo*/
