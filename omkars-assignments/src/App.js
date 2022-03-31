import './App.css';
import Appcomponentgrp from './Components/Appcomponentgrp';
import Yellow from './Components/Yellow';
import Red from './Components/Red';
import Blue from './Components/Blue';
function App() {
  return (
    <div className="App">
      <Appcomponentgrp>
        <Yellow />
        <Yellow />
      </Appcomponentgrp>
      <Appcomponentgrp>
        <Red />
      </Appcomponentgrp>
      <Appcomponentgrp>
        <Blue />
        <Blue />
        <Blue />
      </Appcomponentgrp>
    </div>
  );
  
}

export default App;