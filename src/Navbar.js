import React from 'react';
import './Navbar.css';

function NavBar(props) {
    return(
        <div className="navbar-container">
            <button onClick={() => props.history.push('info')}>¿Como agregar pelis?</button>
            <button onClick={() => props.history.push('/addPeli')}>Agregar peli</button>
        </div>
    );
}



export default NavBar;