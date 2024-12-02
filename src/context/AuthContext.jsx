import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        // setIsAuthenticated(!!token); voltar isso para true
        setIsAuthenticated(true);
    }, []);

    const login = (token) => {
        sessionStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('accessType');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};