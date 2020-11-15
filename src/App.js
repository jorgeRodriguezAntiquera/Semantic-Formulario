import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './Menu.js';
import Formulario from './Formulario';
import Item from './Item';
import Modal from './Modal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <body >
        <div className = "Grid">

        <Item/>
        </div>
        
        <div className ="App-body">
        <Formulario/>
        <Modal/>
        </div>
        

      </body>
    </div>
  );
}

export default App;
