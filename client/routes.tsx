import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'

export const routes = createRoutesFromElements(
  <Route index element={<App />}></Route>
)
