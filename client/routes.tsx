import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App/App'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="inventory" element={<Inventory />} />
    </Route>
  </>
)
