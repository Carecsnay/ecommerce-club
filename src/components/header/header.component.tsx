import './header.style.css';
import { BsCart } from "react-icons/bs";
import React from 'react';

const Header = () => {
    const IconeCarrinho = BsCart as React.ElementType;

    return (
        <div className="header-container">
            <h2 className="header-title">Club Clothing</h2>
            <div className="header-items-container">
                <div className='header-items'>
                    <div className="header-item">Explorar</div>
                    <div className="header-item">Login</div>
                    <div className="header-item">Criar conta</div>
                    <div className="header-item">
                        <IconeCarrinho size={25} />
                        <p style={{ marginLeft: 5 }
                        }>5</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;