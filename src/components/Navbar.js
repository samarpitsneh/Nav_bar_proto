import React from 'react'
import { MenuData } from './MenuData'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar_comp'>
        <h1 className='navbar_logo '>Navbar<i class="fa fa-bars" aria-hidden="true"></i></h1>
        <ul className='navbar_menu'>
            {
                MenuData.map((item, index) => {
                    return (
                        <li key={item.index}>
                            <a href={item.url} className= {item.cName}>
                                <i class = {item.icon}></i>{item.title}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    

  )
}


export default Navbar