import './HeaderComponent.css';

const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title">Club Clothing</h2>
            <div className="header-items-container">
                <div className='header-items'>
                    <div className="header-item">Explorar</div>
                    <div className="header-item">Login</div>
                    <div className="header-item">Criar conta</div>
                    <div className="header-item">Carrinho</div>
                </div>
            </div>
        </div>
    );
}

export default Header;