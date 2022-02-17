import React from 'react';

import Myselect from './UI/select/Myselect.jsx';
import Myinput from './UI/input/Myinput.jsx';
const Postfilter = ({filter,setFilter}) => {
  return (
      <div>
        <Myinput value={filter.query} onChange = {e => setFilter({...filter,query:e.target.value}) }/>
        <Myselect 
       value={filter.sort}
       onChange = {e => setFilter({...filter,sort:e})}
       val={[
      {value:'title',names:'Названию'},
      {value:'body',names:'Описанию'}
      ]} defualt='Сортировка по' />
      </div>
  
  )
};

export default Postfilter;
