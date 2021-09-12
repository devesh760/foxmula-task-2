import logo from './logo.svg';
import './App.css';
import DropDown from './components/dropdown'
function App() {

  return (
    <div className="App">
      <div className="container">
        <DropDown week={1} />
        <DropDown week={2} />
        <DropDown week={3}/>
        <DropDown week={4}/>
        <DropDown week={5}/>
      </div>
    </div>
  );
}

export default App;
