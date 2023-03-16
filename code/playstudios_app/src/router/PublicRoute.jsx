import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../auth'


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const PRIVATE_ROUTE = import.meta.env.VITE_PRIVATE_ROUTE;


    return (
      (!logged)
      ?children
      : <Navigate to={PRIVATE_ROUTE} />
  )
}