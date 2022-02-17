import { useMemo } from "react"
export const usePostsort = (posts,sort) => {
    const sortedpost = useMemo(()=>{
        if(sort){
          return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]));
        }
        return posts;
      },[sort,posts]);
      return sortedpost;
}
export const usePost = (posts,sort,query) => {
    const sortedpost = usePostsort(posts,sort);
    const sortedandsearch = useMemo(()=>{
        return sortedpost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      },[query,sortedpost]);
      return sortedandsearch;
}