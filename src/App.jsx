import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent buttonText='YO'/>
      <ImageComponent src='https://i.natgeofe.com/k/093c14b4-978e-41f7-b1aa-3aff5d1c608a/gray-wolf-closeup_3x4.jpg' alt='a wolf'/>
    </div>
  );
}

export default App;
