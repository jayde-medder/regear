import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App/App'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Community from './components/Community/Community'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import InventoryManager from './components/Admin/InventoryManager/InventoryManager'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="admin/inventory" element={<InventoryManager />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="community" element={<Community />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </>
)
