import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ( {icon, title}) => {
    
        return (
            <nav className='navbar bg-primary'>
               <h1>
               <i className={icon} />{title}
               </h1>
               
              </nav>
        )
    
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};



export default NavBar;

/**
 *  static propTypes = {
     title: this.propTypes.string.isRequired,
     icon: this.propTypes.string.isRequired
    };
    NavBar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
}
    <ul>
                   <li>
                       <Link to='/'>Home</Link>
                   </li>
                   <li>
                       <Link to='/about'>About</Link>
                   </li>
               </ul>
 */