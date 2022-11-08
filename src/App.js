
import './App.css';
import Header  from "./components/header/Header"
import Footer from './components/ footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Textos from './components/Textos';
import Ejmploapis from './components/Ejmploapis';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartWidget from './components/CartWidgets/CartWidget';
import Form from './components/form/Form';

const App = () => {  
  return (
    <>
      <BrowserRouter>

       <Header/>

        <Routes>
          <Route path="/" element={<ItemListContainer /> }/>
          <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          {/* <Ejmploapis/> */}
          {/* <Textos/> */}
          <Route path='/cart' element={<CartWidget/>}/>
          <Route path='/checkout' element={<Form/>}/>

        </Routes>

        

        
      
        <Footer/>
      
      
      </BrowserRouter>
      
      



    </>
   
  );
}

export default App;
