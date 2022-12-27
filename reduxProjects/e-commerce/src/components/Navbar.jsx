import React, { useContext } from "react";
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux";
import { signOutUser } from "../assets/utils/firebase/firebase.utils";
import { UserContext } from "../UserContext";
const Navbar = () => {
  const state=useSelector((state)=>state.handleCart)
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light bg-white shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
            {currentUser ? (
            <span className="btn btn-outline-dark" onClick={signOutUser}>
              <i class="fa fa-sign-out  me-1" aria-hidden="true"></i>

              SIGN OUT
            </span>
          ) : (
            <NavLink className="btn btn-outline-dark" to="/authentication">
                              <i className="fa fa-sign-in me-1" aria-hidden="true"></i>

              SIGN IN
            </NavLink>
          )}



              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
                Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
