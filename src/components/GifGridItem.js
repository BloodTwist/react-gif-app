import React from 'react'

export const GifGridItem = ( { id, url, title } ) => {

    return (
        <div className="card__item animate__animated animate__backInUp">
            <img src={ url } alt={ title } className="card__img" />
            <p>{ title }</p>
        </div>
    )
}
