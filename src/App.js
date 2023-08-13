import './App.css';
import Slideshow from './components/Slideshow';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slideshow sources={[1,2,3,4,5]}/>
      </header>
    </div>
  );
}
