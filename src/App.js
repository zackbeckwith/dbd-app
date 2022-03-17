import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import KillerList from './Pages/KillersList/KillersList';
import SurvivorList from './Pages/SurvivorsList/SurvivorsList';
function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
