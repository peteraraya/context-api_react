import React, { useContext } from 'react';
import { HolaContext } from '../context/HolaProvider';
import { ThemeContext } from "../context/ThemeProvider";

const Principal = () => {

    const { theme } = useContext(ThemeContext);
    const { hola } = useContext(HolaContext);
    
    return (
        <div
            style={{
                background: theme.background,
                color: theme.color,
            }}
        >
            <h1>Contenido de mi sitio web</h1>
            <p>{hola}</p>
        </div>
    )
}

export default Principal
