import './App.css';
import { Products } from './Components/Products/Products';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <h1 className='logo-title'>Ecommerce Store</h1>
      <Sidebar/>
      <Products/>
    </div>
  );
}

export default App;
