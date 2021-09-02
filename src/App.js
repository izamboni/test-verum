import './App.css';
import Navbar from './components/home/navbar';
import Main from './components/home/main';
import Footer from './components/commons/footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;


