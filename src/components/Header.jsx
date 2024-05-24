/* eslint-disable react/prop-types */

import { Moon, Sun } from "@phosphor-icons/react";

function Header (props) {
  return (
    <header role='banner' className='app-head'>
      <h1>GitHub Search</h1>
      <button 
        className="color-quaternary"
        onClick={props.toggleDarkMode}
      >
        {props.darkMode ? "Light" : "Dark"}
        {
          props.darkMode ?
          <Sun size={32} />
          :
          <Moon size={32} />
        }
      </button>
    </header>
  )
}

export default Header;