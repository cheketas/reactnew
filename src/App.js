import React, {useState,useRef,useMemo} from 'react'
import Counter from './components/Counter.jsx'
import Postform from './components/Postforma.jsx';
import Postitem from './components/Postitem.jsx'
import Postlist from './components/Postlist.jsx';
import './styles/App.css'
import Myselect from './components/UI/select/Myselect.jsx';

import Myinput from './components/UI/input/Myinput.jsx';
import Postfilter from './components/Postfilter.jsx';
import Mymodal from './components/UI/Modal/Mymodal.jsx';
import Mybutton from './components/UI/button/Mybutton.jsx';


function App() {
  const [posts,setPosts] = useState([
    {id:1,name:'hello',text:'negorre'},
    {id:2,name:'hellos',text:'negorres'},
    {id:3,name:'hellon',text:'negorren'},
  ]);
  const [vispost,setVisible]=useState(false);
 
  const [filter,setFilter] = useState({sort:'',query:''})
  const callPost = (newPost) => {
    setVisible(false)
    setPosts([...posts,newPost])
  }
  
  const removepost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
   
  const sortedpost = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  },[filter.sort,posts]);
  const sortedandsearch = useMemo(()=>{
    return sortedpost.filter(post => post.name.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,sortedpost]);
  return (
    <div className="App">
      <Mybutton onClick={e => setVisible(true)}>Создать</Mybutton>
      <Postfilter  filter={filter} setFilter={setFilter} />
     <br/ >
     
     
     <Postlist remove={removepost} posts={sortedandsearch} title={'Список постов 1'} />
       <Mymodal visible={vispost} setvisible={setVisible}> <Postform create={callPost} /></Mymodal>
     
     
    </div>
  );
}

export default App;
