import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import AuthProvider from "./features/core/context/AuthContext.tsx";
import UserProvider from "./features/core/context/UserContext.tsx";
import LoadingProvider from "./features/core/context/LoadingContext.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <LoadingProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
            <ReactQueryDevtools/>
          </QueryClientProvider>
        </LoadingProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
)
