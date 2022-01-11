import './App.css';
import Header from './components/Header';
import Login from './components/Login';
function App() {
  return (
    <div className='container'>
      <Header title='Netflare'/>
      <Login/>
    </div>
  );
}

export default App;