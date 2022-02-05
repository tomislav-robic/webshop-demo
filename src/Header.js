import logo from "./icons/algebra_crown.svg";
import basket from "./icons/shopping-bag.svg";
import "./Header.css";


function Header() {
    return (
        <div className="header">
            <div>
                <a href="/"><img className='header_logo' src={logo} alt="" /></a>
            </div>

            <div className="header_right">
                <a className="link" href="/Login">ALGEBRA SHOP</a>                
                <a className="link" href="/Login">SIGN OUT</a>
                <img className='header_basket' src={basket} alt="" />
            </div>

        </div>
    )
}

export default Header;