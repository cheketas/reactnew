import React, {useState} from 'react';
import Mybutton from './UI/button/Mybutton.jsx';
import Myinput from './UI/input/Myinput.jsx';

const Postform = ({create}) => {
   
    const [postsn,setPostsn] = useState({name:"",title:""});
    function otp(e){
      
    e.preventDefault();
    const newpost = {
      id: Date.now(),
      name: postsn.name,
      text: postsn.title,
    }
    create(newpost);
    
    postsn.name=''; 
    postsn.title='';
  }
  return (
  <div>
      <form>
       <Myinput value={postsn.name} onChange={e => setPostsn({...postsn,name:e.target.value})} placeholder='1'/><br/>
       <Myinput value={postsn.title} onChange={e => setPostsn({...postsn,title:e.target.value})} placeholder='2'/><br/>
       <Mybutton onClick={otp}>Отправить</Mybutton>
     </form>
  </div>
  );
};

export default Postform;
