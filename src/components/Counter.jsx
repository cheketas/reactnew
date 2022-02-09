import React, {useState} from 'react'

const Counter = function(){
    const [count,SetCount] = useState(0);
    function up(){
        SetCount(count+1)
      }
      function down(){
        SetCount(count-1)
      }
    return (
        <div className="Counter">
        <h1>{count}</h1><br/>
        <button onClick={up}>up</button>
        <button onClick={down}>down</button>
        </div>
      );
}

export default Counter;

