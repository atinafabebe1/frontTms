import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../Store";

const Navbar = ({ title, links, linkName }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const defaultTitle = "WKU";
  title = title || defaultTitle;

  let index = 0;

  const handleLogout = async () => {
    const response = await fetch("/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      dispatch(authAction.logout());
    }
  };

  return (
    <div>
      {isLoggedIn && (
        <nav className="navbar navbar-expand-md bg-primary ">
          <div className="container ">
            {isLoggedIn && (
              <Link to="/" className="navbar-brand text-white fw-bolder">
                TMS {title}
              </Link>
            )}

            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              // aria-controls="main-nav"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="navbarSupportedContent"
            >
              {isLoggedIn &&
                links.map((link) => (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={link} className="nav-link text-light">
                        {linkName[index++]}
                      </Link>
                    </li>
                  </ul>
                ))}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="text-white bg-primary "
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* {!isLoggedIn && <Login />} */}
    </div>
  );
};

export default Navbar;
