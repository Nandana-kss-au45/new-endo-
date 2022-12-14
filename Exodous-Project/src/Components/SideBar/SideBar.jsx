import React from "react";
import logo from "../../Assets/Images/logo3.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="section1">
        <div className="logo">
          <img className="logo" src={logo} alt="img" />
          {/* <h2>Endoxous</h2>
        <h6 className="s2-logotitle">international private limited</h6> */}
        </div>
        <div>
          <ul className="navbar-nav justify-content-end flex-grow-1 ">
            <li className="nav-item m-2">
              <NavLink to="/">
                <button className="s1-btn btn btn-sm px-4 ">Home</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/orders">
                <button className="s1-btn btn btn-sm px-4 ">Orders</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/salesreport">
                {/* <button className="s1-btn btn btn-sm px-4 ">Products</button> */}
                <div className="dropdown">
                  <button
                    className="s1-btn btn btn-sm"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/"
                      >
                         Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/catagories"
                      >
                           Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/Products"
                      >
                         {/* Product 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/Products "> */}

                        
              All Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/"
                      >
 {/* Products Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/"> */}


                        Catagories
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item s1-btn btn btn-sm px-4"
                        to="/Catagories"
                      >
                        Inventory
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/ordersreport">
                <button className="s1-btn btn btn-sm px-4 ">Payments</button>
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/allnurseries">
                <button className="s1-btn btn btn-sm px-4 ">Nurseries</button>
              </NavLink>
              
            </li>
            <li className="nav-item m-2">
              <button className=" s1-btn btn btn-sm px-4 ">
                <NavLink>Logout</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default SideBar;
