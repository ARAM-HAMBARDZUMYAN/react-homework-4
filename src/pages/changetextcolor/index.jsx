//import React from "react";
//class ChangeTextColor extends React.Component {
 // state = {
 //   inputValue: '',
 //   inputValue1:" ",
 //   result:"",
 //   result1:""
 // };
 // constructor(props) {
  //  super();
 //   console.log(props)
//  }
// text= () => {
//    this.setState({
//      result:this.state.inputValue,
 //     result1:this.state.inputValue1
 //   });
//  };
//  render() {
//   
 //   return (
 //     <div>
 //         <div>
//      <label className='G-input-block-33'>
 //       <input name={'number1'}
 //                      placeholder={'number1'}
 //                      value={this.state.inputValue}
 //                      onChange={(e) =>this.setState({inputValue: e.target.value})}/>
//      </label>
//      <label className='G-input-block-33'>
//</label>        <input type={"color"}
 //                      onChange={(e) =>this.setState({inputValue1: e.target.value})}/>
  //    </label>
 //   </div>
// <p style={{color:this.state.result1}}>{this.state.result}</p>
//        <button onClick={this.text} >Click Me</button>
//      </div>
//    );
//  }
//}


//export default ChangeTextColor

import React, { useState } from 'react';

function ChangeTextColor() {
  const [items, setItems] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputViewValue, setInputViewValue] = useState('')
  const [inputColorValue, setInputColorValue] = useState('')
  const addItem = () => {
    setInputColorValue(items);
    setInputViewValue(inputValue);
  };

  return (
    <div>  
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <input type={"color"} value={items} onChange={(e) => setItems(e.target.value)} />
      <p style={{color:inputColorValue}}>{inputViewValue}</p>
      <button onClick={addItem}>Add</button>
      
    </div>
  );
}
export default ChangeTextColor
