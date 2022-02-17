import React, {useState,useRef,useMemo,useEffect} from 'react'
import Counter from './components/Counter.jsx'
import Postform from './components/Postforma.jsx';
import Postitem from './components/Postitem.jsx'
import Postlist from './components/Postlist.jsx';
import './styles/App.css'
import Myselect from './components/UI/select/Myselect.jsx';
import { usePost,sortPost } from './hooks/usePost.js';
import Myinput from './components/UI/input/Myinput.jsx';
import Postfilter from './components/Postfilter.jsx';
import Mymodal from './components/UI/Modal/Mymodal.jsx';
import Mybutton from './components/UI/button/Mybutton.jsx';
import axios from 'axios';
import PostService from './API/PostService.js';
import Myloader from './components/UI/loader/Myloader.jsx';
import { useFetching } from './hooks/useFethcing.js';
import { GetPagecount } from './utils/getPage.js';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Post from './pages/Post.js';
import Postid from './pages/Postid.jsx';
import { AuthContext } from './contect/index.js';

function App() {
const [isauth,setisauth] = useState(false);
  return (
    <AuthContext.Provider value={{
      isauth,
      setisauth
    }}>
    <BrowserRouter>
    <Link to='/about'>About</Link>
    <Link to=''>Nazad</Link>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route  path="" element={<Post />} />
      <Route path="/post/:id" element={<Postid />} />
    </Routes>
  </BrowserRouter>
  </AuthContext.Provider>
  );
}

export default App;
