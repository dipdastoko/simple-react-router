import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FreindDetail from './components/FriendDetail/FreindDetail';
import Culture from './components/Culture/Culture';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/friends' element={<Friends></Friends>}></Route>
          <Route path='/friend/:friendId' element={<FreindDetail></FreindDetail>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/about/culture' element={<Culture></Culture>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
          <Route path='post/:postId' element={<PostDetail></PostDetail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
