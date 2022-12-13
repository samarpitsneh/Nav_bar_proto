import React,{ useState} from 'react'
import { MenuData } from './MenuData'
import "./Navbar.css"
function Navbar() {
    const [toggleMenu,setToggleMenu] = useState(false);
    
  return (
    <div className='navbar_comp'>
        <h1 className='navbar_logo '>Navbar<i class="fa-solid fa-person" aria-hidden="true"></i></h1>
       
       <div className='navbar_menu-compr'>
        { toggleMenu 
            ?<i class="fa-solid fa-times" onClick={() => setToggleMenu(false)}></i>
            : <i class= "fa-solid fa-bars" onClick={() => setToggleMenu(true)}></i>
        }
        {
              toggleMenu && (
               
                    
                  <ul className="navbar_menu_compr-list">
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
                

              )
             }
       

       
       </div>
       
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