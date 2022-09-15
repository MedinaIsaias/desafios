
import ItemDetail from '../src/components/ItemDetail/ItemDetail';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './page/Cart';

function App() {
  
  return (
 
  <BrowserRouter>
  


<Routes>
      <Route path="/" element={<ItemDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
