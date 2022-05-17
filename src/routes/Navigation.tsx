import { BrowserRouter, Navigate, NavLink } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                <li>
                    <NavLink to="/" className={ ({ isActive })=> isActive ? 'nav-active' : '' }>Shopping</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive })=> isActive ? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive })=> isActive ? 'nav-active' : '' }>Users</NavLink>
                </li>
            </ul>
            </nav>

            <Routes>
        <Route path="about" element={ <h1>About Page</h1> } />
        <Route path="users" element={ <h1>Users Page</h1> } />
        <Route path="home" element={ <h1>Home Page</h1> } />
        <Route path="/*" element={ <ShoppingPage/> } />
      </Routes>
            
        </div>
    </BrowserRouter>
    </>
  )
}
