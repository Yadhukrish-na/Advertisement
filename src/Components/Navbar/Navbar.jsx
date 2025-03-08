
import Style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import profile from '../../assets/Baby copy.jpeg'
const Navbar = () => {

    return (
        <div className={Style.container}>

            <ul className={Style.nav}>
                <NavLink to="/" activeClassName={Style.active}>
                    <li className={Style.content}>Home</li>
                    <hr className={Style.element} />
                </NavLink>
                <NavLink to="/hospital">
                    <li className={Style.content}>Services</li>
                    <hr className={Style.element} />
                </NavLink>
                <NavLink to="/about">
                    <li className={Style.content}>Portfolio</li>
                    <hr className={Style.element} />
                </NavLink>
                <NavLink to="/contact">
                    <li className={Style.content}>About Us</li>
                    <hr className={Style.element} />
                </NavLink>
                <NavLink to="/contact">
                    <li className={Style.content}>Contact</li>
                    <hr className={Style.element} />
                </NavLink>
            </ul>
            <div className={Style.item}>
       <img src={profile} alt="" className={Style.avatar}/>
      </div>

            <div>
            </div>
        </div>
    );
};

export default Navbar;
