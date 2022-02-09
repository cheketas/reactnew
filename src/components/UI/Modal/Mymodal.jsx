import React from 'react'
import cl from './Mymodal.module.css'

const Mymodal = ({children,visible,setvisible}) => {
    const rootc = [cl.mymodal];
    if(visible === true){
        rootc.push(cl.active)
    }
  return (
    <div className={rootc.join(' ')} onClick={e=>setvisible(false)}>
        <div className={cl.mymodalcontent}  onClick={e=>e.stopPropagation()}>
        {children}
        </div>
    </div>
  )
}

export default Mymodal