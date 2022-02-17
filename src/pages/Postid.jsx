import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'

import PostService from '../API/PostService.js';
import { AuthContext } from '../contect/index.js';
import { useFetching } from '../hooks/useFethcing.js';
const Postid = () => {
  const {isauth,setisauth} = useContext(AuthContext);
  console.log(isauth);
    const id = useParams();
    const [post,setPosts]= useState([]);
    const [fetching,ispostload]=useFetching(async()=>{
        const response = await PostService.getpostid(id.id);
        setPosts(response.data);
        console.log(response.data.id)
      })
      useEffect(()=>{
        fetching();
      },[]) ;
  return (
    <div>
        <h1>{id.id} {post.title} {post.body}  </h1>
    </div>
  )
}

export default Postid