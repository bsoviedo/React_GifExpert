import React, { useState } from 'react';
import { AddCategory } from './addCategory';
import { GifGrid } from './GifGrid';


export const ListCategories = () => {

    const [Categories, setCategories] = useState(['Dragon Ball'])

    return (
        <>
            <br />
            < AddCategory setCategories={setCategories} />
            <br />

            <hr />



            <ol>
                {Categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })}
            </ol>
        </>
    )
}