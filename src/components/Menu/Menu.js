import React from 'react';
import './Menu.css'

const Menu = ({handleButton}) => {
  return (
    <nav>
      <h2>What's <span>New?</span></h2>
      <button name="local" type="button" onClick={(e) => handleButton(e)}>Local</button>
      <button name="health" type="button" onClick={(e) => handleButton(e)}> Health</button>
      <button name="entertainment" type="button" onClick={(e) => handleButton(e)}>Entertainment</button>
      <button name="science" type="button" onClick={(e) => handleButton(e)}>Science</button>
      <button name="technology"type="button" onClick={(e) => handleButton(e)}>Technology</button>
    </nav>
  )
}

export default Menu;