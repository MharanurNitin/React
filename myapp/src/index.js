import React from 'react';
import ReactDom from 'react-dom';

let Greeting=()=>{
  return <h1>Hello world</h1>;
}
ReactDom.render(<Greeting/>,document.getElementById('root'));