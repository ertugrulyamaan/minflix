import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import Trending from './pages/Trending'
import Upcoming from './pages/Upcoming'
import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'
import { useState } from 'react';
import { MainContext } from './context/SearchContext';
import Footer from './components/Footer';

function App() {
  
const [searchValue,setSearchValue] = useState('') 
const [searchMovies,setSearchMovies] = useState([]) 


const searchData ={searchValue,searchMovies,setSearchValue,setSearchMovies}
  return (
    <>
     <MainContext.Provider value={searchData}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular/:userId' element={<MoviePage/>}/>
        <Route path='/toprated/:userId' element={<MoviePage/>}/>
        <Route path='/trending/:userId' element={<MoviePage/>}/>
        <Route path='/upcoming/:userId' element={<MoviePage/>}/>
        <Route path='/search/:userId' element={<MoviePage/>}/>
        <Route path='/:userId' element={<MoviePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/toprated' element={<TopRated/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
      </Routes>
      <Footer/>
     </MainContext.Provider>
    </>
  );
}

export default App;
