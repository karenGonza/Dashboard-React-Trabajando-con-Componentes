import React from 'react';
import PropTypes from 'prop-types';

/* Componente hijo */
const TableRow = ({title, length, rating, genres, awards}) => { /* Por props recibo todo lo que estoy mandando */
    return (
        <tr>
            <th>{title}</th>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {genres.map((genre, i) => <li key={genre + i}>{genre}</li>)} {/* El key para que no salgan errores, dentro de la etiqueta del componente */}
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    )
}

TableRow.propTypes = {}

export default TableRow;