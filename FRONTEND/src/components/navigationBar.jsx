import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import { NavLink} from "react-router-dom";
import "../CSS/navigationBar.css"
import sitelogo from "../site_assets/brand_logo_1.png";
import {Button} from './Button';

class Navigationbar extends Component{
    state = { clicked: false}

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <div className="NavbarItems">
                <h1>
                    <NavLink className="navbar-brand" to="/">
                        <img src={sitelogo} className="navbar-brand" alt="" />
                    </NavLink>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className="navbar-nav" className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            <NavLink to="/oppLogin">
              <Button className="buttons">
                Cadent Login
              </Button>
            </NavLink>
            <NavLink to="/cadLogin">
              <Button to="" className="buttons">
                Cadvocate Login
              </Button>
            </NavLink>
            </div>
        )
    }
}
export default Navigationbar;