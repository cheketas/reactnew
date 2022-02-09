import React from 'react';
import classes from './Myinput.module.css';
const Myinput = React.forwardRef((props,ref) => {
  return (
      <input ref={ref} className={classes.myInp} {...props} />
  )
});

export default Myinput;
