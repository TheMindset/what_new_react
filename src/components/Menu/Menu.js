import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav>
      <h2>What's <span>New?</span></h2>
      <button name="health"> Health</button>
      <button name="entertainment">Entertainment</button>
      <button name="science">Science</button>
      <button name="technology">Technology</button>
      <button name="local">Local</button>
    </nav>
  )
}

export default Menu;