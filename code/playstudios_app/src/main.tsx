import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from "./store";

import { MaterialDesignContent, SnackbarProvider } from 'notistack';

// routes
import Router from './router';
import styled from "styled-components";
import { AuthProvider } from './auth/AuthParammeter';
import PulseProvider from "./providers/PulseProvider";
import ThemeProvider from "./theme";

import { SvgIcon } from "@mui/material";
import { ReactComponent as iconToastSuccess } from 'assets/icons/toast-success.svg';

const queryClient = new QueryClient();


//Print banner in console log


console.log(" ;-.  .          ,-.  .         .       ")
console.log(" |  ) |         (   ` |         | o     ")
console.log(" |-'  | ,-: . .  `-.  |-  . . ,-| . ,-. ")
console.log(" |    | | | | | .   ) |   | | | | | | | ")
console.log(" '    ' `-` `-|  `-'  `-' `-` `-' ' `-' ")
console.log("            `-'                         ")

//Pring version build in console log
console.log("Version: " + import.meta.env.VITE_APP_VERSION);

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#E9FBE9',
    border: '1px solid #04BA00',
    borderRadius: '6px',
    color: '#2B2B2B',
    padding: '5px 12px',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px'
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
}));


//define prototype function orientationDidChange
(window as any).orientationDidChange = function () {
  //console.log('orientationDidChange ok!');
  window.dispatchEvent(new Event('resize'));

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 100);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 200);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 400);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 500);


}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>

    <HelmetProvider>
      <ReduxProvider store={store}>
        <PulseProvider>
          <React.StrictMode>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <ThemeProvider>
                  <SnackbarProvider maxSnack={1} autoHideDuration={4000} style={
                    {
                      bottom: '70px',
                      position: 'inherit',
                    }} 
                    dense 
                    Components={{
                      success: StyledMaterialDesignContent,
                      error: StyledMaterialDesignContent,
                    }}
                    iconVariant={{
                      success: <SvgIcon component={iconToastSuccess} viewBox="0 0 20 20" sx={{ height: '20px', marginRight: '8px' }} />
                    }}>
                    <Router />
                  </SnackbarProvider>
                </ThemeProvider>
              </BrowserRouter>
            </QueryClientProvider>
          </React.StrictMode>
        </PulseProvider>
      </ReduxProvider>
    </HelmetProvider>

  </AuthProvider >
)
