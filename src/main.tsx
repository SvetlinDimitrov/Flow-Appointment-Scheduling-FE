import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import AuthProvider from "./features/shared/context/AuthContext.tsx";
import UserProvider from "./features/shared/context/UserContext.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from "react-router-dom";
import {queryClient} from "./utils/react_query/queryClient.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
            <ReactQueryDevtools/>
          </QueryClientProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode>,
)
