//import React from "react";
import './style.scss'


//class NumberedList extends React.Component {
 
// state = {
//      items: [],
//      inputValue: ''
//    };
//    handleChange = (e) => {
//      this.setState({inputValue: e.target.value})
//    }

//  addItem = () => {
//    this.setState({
//      items: [...this.state.items, this.state.inputValue],
//      inputValue: ''
//    });
//  };

//  render() {
 //   return (
 //     <div>
//        <input
 //         value={this.state.inputValue}
 //         onChange={this.handleChange}
  //      />
  //      <button onClick={this.addItem}>Add</button>
  //      <ol>
  //        {this.state.items.map((item, index) => (
  //          <li key={index}>{item}</li>
 //         ))}
  //      </ol>
  //    </div>
  //  );
 // }
//}

//export default NumberedList;

import React, { useState } from 'react';

function NumberedList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default NumberedList;