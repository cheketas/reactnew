import React from 'react';
import classes from './Myselect.module.css';
const Myselect = ({val,defualt,value,onChange}) => {
  return(
    <select className={classes.mySel} value={value} onChange={e => onChange(e.target.value)}>
    <option value={defualt} disabled>{defualt}</option>
    {val.map(options =>
    <option value={options.value}>{options.names}</option>
    )}
  </select>
  )
};

export default Myselect;
