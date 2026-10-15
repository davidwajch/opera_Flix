import React from 'react';

import './menu.css';
import {Link} from 'react-router-dom';
import Button from '../Button';

function Menu() {

    return (

        <nav className= "Menu">

            <Link to="/" className= "logo">
                OperaFlix
            </Link>

            <Button as= {Link} className= "ButtonLink" to= "/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>

    );

}

export default Menu;