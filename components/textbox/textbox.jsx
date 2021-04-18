import React from 'react';

export const Textbox = ({children, ...rest}) => {
    return (
        <>
            <label>{children}: </label>
            <input {...rest}/>
        </>
    )
}
