import React from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import Postitem from './Postitem.jsx';
import '../styles/App.css'
const Postlist = ({posts,title,remove}) => {
  if(!posts.length){
    return (<h1 style={{textAlign:'center'}}>Нет постов!</h1>)
  }
  return( <div>
      <h1 style={{textAlign:'center'}}>{title}</h1>
      <center>
        <TransitionGroup>
        
        {posts.map((post,index) => 
         <CSSTransition
         key={post.id}
         timeout={500}
         classNames="post"
       >
         <Postitem remove={remove} number={index+1} post={post} key={post.id} />
         </CSSTransition>
          
        )}
        
        </TransitionGroup>
      
       </center>
  </div>)
};

export default Postlist;
