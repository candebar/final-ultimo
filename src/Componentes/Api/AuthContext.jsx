// const { createContext, useState, useContext } = require('react');
import { createContext, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(()=> {
        //Cargar el estado de autenticacioón desde localstorage
        return localStorage.getItem('isAuthenticated') === 'true';

    });
};

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');//Guardar en localstorage
    };
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); //Eliminar de localstorage
        return (
            <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                {children}
            </AuthContext.Provider>
        )
    };

    export const useAuth = () => useContext(AuthContext);