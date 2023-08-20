import { Routes, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import LandingPage from './components/pages/landingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>HOME</h1>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
