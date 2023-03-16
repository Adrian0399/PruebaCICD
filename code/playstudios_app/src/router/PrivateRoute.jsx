import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../auth'

const PUBLIC_ROUTE = import.meta.env.VITE_PUBLIC_ROUTE;

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    return (
        (logged)
        ?children
        : <Navigate to={PUBLIC_ROUTE} />
    )
}