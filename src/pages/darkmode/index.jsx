import React, {useState} from "react";
import './style.scss'

const DarkMode = ({title, description}) => {  // {title, description} = props
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const toggleDarkMode = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }


  return <div className={`P-box ${isDarkMode ?
    'P-dark-mode' : ''}`}>
    <h3>{title} </h3>
    {description ? <p>{description}</p> : null}
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, odit.</span>
    <label className='P-checkbox '>
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        value={isDarkMode}
      />
      <p>Dark mode</p>
    </label>
  </div>
}


// class DarkMode extends React.Component {
//   state = {
//     isDarkMode: false
//   }
//
//   toggleDarMode = (e) => {
//     console.log(e.target.value)
//     this.setState({isDarkMode: !this.state.isDarkMode})
//   }
//
//   render() {
//     return <div className={`P-box ${this.state.isDarkMode ?
//       'P-dark-mode' : ''}
//       `}>
//       <h3>{this.props.title} </h3>
//       <p>{this.props.description}</p>
//       <label className='P-checkbox '>
//         <input onChange={this.toggleDarMode}
//                type="checkbox"
//                value={this.state.isDarkMode}/>
//         <p>Dark mode</p>
//       </label>
//     </div>
//   }
// }

export default DarkMode