import react,{ useMemo,useState  } from "react"
export const useFetching = (callback) => {
 const [isloading,setisloadning]=useState(false)
 const fetching = async() =>{
    setisloadning(true)
    await callback()
    setisloadning(false)
 }
 return [fetching,isloading];
}