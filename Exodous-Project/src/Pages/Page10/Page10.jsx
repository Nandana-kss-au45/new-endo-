import React from "react";
import { NavLink } from "react-router-dom";

const Page10 = () => {
  return (
    <div className="section2 ">
      <nav
        className="s2-navabar navbar navbar-expand-lg "
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavLink className="fw-bold navbar-brand" to="/">
            All Products
          </NavLink>
          <button
            className="btn btn-outline-success btnround"
            type="submit"
          ></button>
        </div>
        <hr />
      </nav>
      <div className="d-flex justify-content-between align-items-center px-2 py-1">
        <div className="p-5">
          <input
            class="form-control px-5"
            type="text"
            value="Search for catagories here..."
            aria-label="readonly input example"
            readonly
          />
        </div>
        <div>
          <div className="d-flex align-items-center px-4 ">
            {/* <button type="button" class="btn btn-sm btn-link me-5">
              Reorder Catagory
            </button> */}
            <div class="form-check me-5">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Show low/Out of stock products
              </label>
            </div>
            <div className="p2-selection mx-2">
              <select class="form-select " aria-label="Default select example">
                <option selected>All nurseries</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button type="button" className="btn-page4 btn btn-success btn-md">
              + Add new nursery
            </button>
          </div>
        </div>
      </div>
      <div
        className="container-lg d-flex justify-content-between px-5 py-2"
        style={{ width: "100%" }}
      >
        <table
          className="table table-borderless"
          style={{
            overflow: "hidden",
            width: "100%",
            borderRadius: ".5rem",
            backgroundColor: "white",
          }}
        >
          <thead style={{ backgroundColor: "#eaeaea" }}>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Nursery Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <img src="..." alt="img" />
              </th>
              <td>Flowers</td>
              <td>30</td>
              <td></td>
              <td>Rs 320</td>
              <td>Nursery Name</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="..." alt="img" />
              </th>
              <td>Flowers</td>
              <td>30</td>
              <td></td>
              <td>Rs 320</td>
              <td>Nursery Name</td>
            </tr>
            <tr>
              <th scope="row">
                <img src="..." alt="img" />
              </th>
              <td>Flowers</td>
              <td>30</td>
              <td></td>
              <td>Rs 320</td>
              <td>Nursery Name</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-lg d-flex flex-wrap justify-content-between px-5 py-2">
        <div className="container-md p-0">
          <div
            style={{ borderRadius: ".5rem" }}
            className="container-sm d-flex gap-5 justify-content-between px-0 py-2"
          >
            <div class="card w-100">
              <div class="row g-0 d-flex justify-content-center">
                <div
                  class="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <img
                    src="..."
                    class=" bg-primary img-fluid rounded-start"
                    alt="..."
                  /> */}
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".3rem",
                      width: "70px",
                      height: "70px",
                    }}
                  ></div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
                    <p class="card-text">
                      <small class="text-muted">per piece</small>
                    </p>
                    <span class="card-text">Rs 400</span>

                    <span
                      class="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h4>In Stock: 12</h4>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div class="card w-100">
              <div class="row g-0 d-flex justify-content-center">
                <div
                  class="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <img
                    src="..."
                    class=" bg-primary img-fluid rounded-start"
                    alt="..."
                  /> */}
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".3rem",
                      width: "70px",
                      height: "70px",
                    }}
                  ></div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
                    <p class="card-text">
                      <small class="text-muted">per piece</small>
                    </p>
                    <span class="card-text">Rs 400</span>

                    <span
                      class="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h4>In Stock: 12</h4>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
            <div class="card w-100">
              <div class="row g-0 d-flex justify-content-center">
                <div
                  class="col-md-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <img
                    src="..."
                    class=" bg-primary img-fluid rounded-start"
                    alt="..."
                  /> */}
                  <div
                    className="cardBox"
                    style={{
                      backgroundColor: "#ececec",
                      borderRadius: ".3rem",
                      width: "70px",
                      height: "70px",
                    }}
                  ></div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Product Name</h5>
                    <p class="card-text">
                      <small class="text-muted">per piece</small>
                    </p>
                    <span class="card-text">Rs 400</span>

                    <span
                      class="form-check form-switch d-inline me-2"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </span>
                  </div>
                </div>
                <hr style={{ width: "95%" }} />
                <div className="d-flex p-2 justify-content-between align-items-center">
                  <h4>In Stock: 12</h4>
                  <button
                    type="button"
                    className="btn bg-success btn-success btn-md"
                  >
                    Details
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Page10;