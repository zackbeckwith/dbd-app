import {Route, Routes} from 'react-router-dom'
import SurvivorList from '../../Pages/SurvivorList/SurvivorList';
import KillerList from '../../Pages/KillerList/KillerList';
const NavBar = (props) => {
  return (
    <>
    <header className="App-header">
      <img 
        src="/images/logo.png" 
        alt="logo" 
        className="App-logo"
      />
      <a href="/survivors">Survivors</a>
      <a href="/killers">Killers</a>
      </header>
      <Routes>
        <Route path='/survivors' element={<SurvivorList />} />
        <Route path='/killers' element={<KillerList />} />
      </Routes>
    </>
  );
}
 
export default NavBar;