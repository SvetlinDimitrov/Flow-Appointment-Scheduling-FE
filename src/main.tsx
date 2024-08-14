import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import UserAuthProvider from "./features/shared/context/UserAuthContext.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter} from "react-router-dom";
import {queryClient} from "./utils/react_query/queryClient.ts";
import ToastNotification from "./features/core/toast/ToastNotification.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <UserAuthProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
            <ReactQueryDevtools/>
            <ToastNotification/>
          </QueryClientProvider>
      </UserAuthProvider>
  </StrictMode>,
)
