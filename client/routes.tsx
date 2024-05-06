import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Inventory from './components/Inventory/Inventory'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Community from './pages/Community'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="inventory" element={<Inventory />} />
      {/* <Route path="admin/inventory" element={<InventoryManager />} />
      <Route path="admin/inventory/add" element={<AddInventoryForm />} /> */}
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="community" element={<Community />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </>
)
