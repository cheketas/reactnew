import React, {useState,useRef,useMemo,useEffect} from 'react'
import Counter from '../components/Counter.jsx'
import Postform from '../components/Postforma.jsx';
import Postitem from '../components/Postitem.jsx'
import Postlist from '../components/Postlist.jsx';
import '../styles/App.css'
import Myselect from '../components/UI/select/Myselect.jsx';
import { usePost,sortPost } from '../hooks/usePost.js';
import Myinput from '../components/UI/input/Myinput.jsx';
import Postfilter from '../components/Postfilter.jsx';
import Mymodal from '../components/UI/Modal/Mymodal.jsx';
import Mybutton from '../components/UI/button/Mybutton.jsx';
import axios from 'axios';
import PostService from '../API/PostService.js';
import Myloader from '../components/UI/loader/Myloader.jsx';
import { useFetching } from '../hooks/useFethcing.js';
import { GetPagecount } from '../utils/getPage.js';

function Post() {
  const [posts,setPosts] = useState([]);
  const [vispost,setVisible]=useState(false);
  const [filter,setFilter] = useState({sort:'',query:''})
  const [totalcount,setTotalcount] = useState(0);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(10);
  let pages = []
  for(let i=1;i<totalcount;i++){
    pages.push(i);
  }
  const [fetching,ispostload]=useFetching(async()=>{
    const response = await PostService.getpost(limit,page);
    setPosts(response.data);
    const xtotal = response.headers['x-total-count'];
    setTotalcount(GetPagecount(xtotal,limit));
  })
  const sortedandsearch = usePost(posts,filter.sort,filter.query); 
  const callPost = (newPost) => {
    setVisible(false)
    setPosts([...posts,newPost])
  }
  const removepost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }
  useEffect(()=>{
    fetching();
  },[page])
  function chengepage (p){
    setPage(p);
    
  }
  
  return (
    <div className="App">
      
      
      <Postfilter  filter={filter} setFilter={setFilter} />
     <br/><center>
     <Mybutton onClick={e => setVisible(true)}>Создать</Mybutton><Myloader/>
     <Postlist remove={removepost} posts={sortedandsearch} title={'Ваши посты'} load={ispostload} />
     </center>
     
       <Mymodal visible={vispost} setvisible={setVisible}> <Postform create={callPost} /></Mymodal>
       {
         pages.map(p =>
          <Mybutton onClick={e=>chengepage(p)}>{p}</Mybutton>
          )
       }
     
    </div>
  );
}

export default Post;
