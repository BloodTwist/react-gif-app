import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai'] );


    // My way
    // const handleAdd = () =>{
    //     return setCategories( cat => cat.concat( 're:zero') );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                } 
            </ol>
        </>
    )
}

export default GifExpertApp
