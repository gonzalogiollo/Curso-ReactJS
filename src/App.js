import './App.css';
import Header  from "./components/header/Header"
import Footer from './components/ footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Form from './components/form/Form';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


const App = () => {  
  return (
    <>
      <BrowserRouter>
         
        <CartProvider>
          <Header/>
          <Routes>
                  <Route path="/" element={<ItemListContainer /> }/>
                  <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
                  <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
                  {/* <Ejmploapis/> */}
                  {/* <Textos/> */}
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/checkout' element={<Form/>}/>

          </Routes>


        </CartProvider>

        <Footer/>

      </BrowserRouter>

    </>
   
  );
}

export default App;
