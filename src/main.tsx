import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import UserAuthProvider from "./shared/context/UserAuthContext.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from "react-router-dom";
import {queryClient} from "./utils/react-query/queryClient.ts";
import ToastNotification from "./shared/core/toast/ToastNotification.tsx";
import {createTheme, ThemeProvider} from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    body1: {
      [`@media (min-width:0px)`]: {
        fontSize: '0.7rem',
      },
      [`@media (min-width:600px)`]: {
        fontSize: '1.2rem',
      },
      [`@media (min-width:960px)`]: {
        fontSize: '1.4rem',
      },
    }
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UserAuthProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
            <ReactQueryDevtools/>
            <ToastNotification/>
          </QueryClientProvider>
      </UserAuthProvider>
    </ThemeProvider>
  </StrictMode>,
)