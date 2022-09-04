import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// import { AiOutlineShoppingCart } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <AiOutlineShoppingCart/> */}
      <header className="App-header">
        <ItemListContainer greeting="Hola"/>
      </header>
    </div>
  );
}

export default App;
