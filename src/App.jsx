import { Route, Routes } from 'react-router-dom';
import './App.css'
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/:id' element={<Character />} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
