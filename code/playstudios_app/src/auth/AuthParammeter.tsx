import { createContext, useEffect, useReducer, useCallback, useMemo } from 'react';

import { PATH_AUTH } from '../router/paths';

import { setSession } from './utils';


type AuthProviderProps = {
    children: React.ReactNode;
  };

export function AuthProvider({ children }: AuthProviderProps) {
  
  
    const initialize = useCallback(async () => {
      try {

        console.log(window.location.pathname);

        if( !window.location.pathname.includes(PATH_AUTH.root) ){

            const queryParameters = new URLSearchParams(window.location.search)
            const accessToken = queryParameters.get("accessToken");
    
            if ( accessToken ) {
                setSession(accessToken);
        
            } else {
                //Get out view
               // window.location.href = PATH_AUTH.out;
            }
        }
      } catch (error) {
        console.error(error);
        //Get out view on error
        //window.location.href = PATH_AUTH.out;
      }
    }, []);
  
    useEffect(() => {
      initialize();
    }, [initialize]);
  
    
    return (
        <>
            {children}
        </>
      );

  }
  