import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { routes } from './routes'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Auth0Provider
    domain="regear.au.auth0.com"
    clientId="DSBCxcWzRz9U2HHFurnjboiFTadfxFKO"
    redirectUri="http://localhost:5173/inventory"
    audience="https://regear/api"
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </Auth0Provider>
)
