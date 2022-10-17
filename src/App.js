
import './App.css';
import Header  from "./components/header/Header"
import Main from './components/main/Main';
import Footer from './components/ footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer saludo=" Bienvenidos a nuestro e-shop online"/>
      <Main/>
      <Footer/>
      



    </>
   
  );
}

export default App;
