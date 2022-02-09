import React from 'react';

const Myselect = ({val,defualt,value,onChange}) => {
  return(
    <select value={value} onChange={e => onChange(e.target.value)}>
    <option value={defualt} disabled>{defualt}</option>
    {val.map(options =>
    <option value={options.value}>{options.names}</option>
    )}
  </select>
  )
};

export default Myselect;
