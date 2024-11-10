import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./images/logo.png";
function HeaderLayout() {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/" className="menu__link">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/course" className="menu__link">Khoá học</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login" className="menu__link">Đăng nhập</NavLink>
                        </li>
                        <li>
                            <NavLink to="/personal" className="menu__link"> Cá nhân
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </header>   
          
       
            
        </>
    );
}
export default HeaderLayout;