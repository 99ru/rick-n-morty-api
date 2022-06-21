import './App.css';
import Header from './components/header/Header';
import SearchField from './components/search/SearchField';
import Characters from './components/characters/Characters';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <Header />
      </div>

      <div className="App-search">
        <SearchField />
      </div>
      
      <Characters />

      <div className="App-footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
