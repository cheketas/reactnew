import React, {useState} from 'react'
import Mybutton from './UI/button/Mybutton';

const Postitem = function(props){
    const [count,SetCount] = useState(0);
    

    
    return (
        <div className="Post">
        <div className="Post_content">
            <strong>{props.number}. {props.post.name} <br/> {props.post.text}</strong>
        </div>
        <div className="Post_button">
            <Mybutton onClick={() => props.remove(props.post)}>Удалить!</Mybutton>
        </div>
        </div>
      );
}

export default Postitem;