import React, {useState} from 'react'
import Mybutton from './UI/button/Mybutton';
import { useNavigate } from 'react-router-dom';
const Postitem = function(props){
    const [count,SetCount] = useState(0);
    const navigate = useNavigate();

    
    return (

        <div className="Post" >
        <div className="Post_content">
        {props.post.id}.<strong> {props.post.title} </strong><br/> {props.post.body}
        </div>
        <div className="Post_button">
            <Mybutton onClick={() => props.remove(props.post)}>Удалить!</Mybutton>
            <Mybutton onClick={() => navigate('/post/'+props.post.id)}>Открыть!</Mybutton>
        </div>
        </div>
      );
} 

export default Postitem; 