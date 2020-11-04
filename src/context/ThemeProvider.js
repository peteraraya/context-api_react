import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext= createContext();

const ThemeProvider = (props) => {

    // data inicial
    const themes = {
        color: '#000',
        background: '#eee'
    }

    const [theme, setTheme] = useState(themes);

    useEffect(() => {
        if (localStorage.getItem('themeLocal')) {
            const themeLocal = JSON.parse(localStorage.getItem('themeLocal'));
            setTheme(themeLocal);
        }
    }, [])

    // Generaremos otra acción

    const cambioColor = (valor) =>{
        setTheme(valor);
        // guardamos en el localStorage
        localStorage.setItem('themeLocal', JSON.stringify(valor));
    }

    return (
        <ThemeContext.Provider value={{ theme, cambioColor }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
