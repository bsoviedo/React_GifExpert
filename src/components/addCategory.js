import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim().length > 2) {
            setCategories(cats => [input, ...cats])

            setInput('')
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <label /> Por favor ingresa una categoría
            <br />
            <br />
            <input
                type="text"

                value={input}

                onChange={handleChange}

                placeholder='Categoria'

            />

        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}