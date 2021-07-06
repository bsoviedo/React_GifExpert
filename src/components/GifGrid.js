import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGif } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category)

    return (
        <>
            <h3> {category}</h3>

            {loading && <p>Loading ...</p>}

            <div className='card-grid'>


                {
                    data.map(img =>
                    (
                        <GifGridItem
                            key={img.id}
                            {...img} /> //Esta es otra forma de pasar el Prop
                    )
                    )
                }

            </div>
        </>
    )
}