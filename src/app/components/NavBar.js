import React from "react";
import { useAuthState } from "../../auth/auth-context";
import { withRouter } from "react-router-dom";
import JoinButton from "../../auth/components/JoinButton";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { address } = useAuthState();

  return (
    <div className="nav-bar">
      <NavLink className="nav-bar__logo" to="/">
        TRUSAT
      </NavLink>

      <div
        className={
          props.location.pathname === "/"
            ? "nav-bar__link-wrapper--highlight"
            : "nav-bar__link-wrapper--lowlight"
        }
      >
        <NavLink
          className={
            props.location.pathname === "/"
              ? "nav-bar__link--highlight"
              : "nav-bar__link--lowlight"
          }
          to="/"
        >
          WELCOME
        </NavLink>
      </div>

      <div
        className={
          props.location.pathname.includes("catalog")
            ? "nav-bar__link-wrapper--highlight"
            : "nav-bar__link-wrapper--lowlight"
        }
      >
        <NavLink
          className={
            props.location.pathname.includes("catalog")
              ? "nav-bar__link--highlight"
              : "nav-bar__link--lowlight"
          }
          to="/catalog/priorities"
        >
          CATALOG
        </NavLink>
      </div>

      <div
        className={
          props.location.pathname === `/profile/${address}`
            ? "nav-bar__link-wrapper--highlight"
            : "nav-bar__link-wrapper--lowlight"
        }
      >
        <NavLink
          className={
            props.location.pathname === `/profile/${address}`
              ? "nav-bar__link--highlight"
              : "nav-bar__link--lowlight"
          }
          to={`/profile/${address}`}
        >
          MY PROFILE
        </NavLink>
      </div>

      <div
        className={
          props.location.pathname === "/about"
            ? "nav-bar__link-wrapper--highlight"
            : "nav-bar__link-wrapper--lowlight"
        }
      >
        <NavLink
          className={
            props.location.pathname === "/about"
              ? "nav-bar__link--highlight"
              : "nav-bar__link--lowlight"
          }
          to="/about"
        >
          ABOUT
        </NavLink>
      </div>

      <div
        className={
          props.location.pathname === "/how"
            ? "nav-bar__link-wrapper--highlight"
            : "nav-bar__link-wrapper--lowlight"
        }
      >
        <NavLink
          className={
            props.location.pathname === "/how"
              ? "nav-bar__link--highlight"
              : "nav-bar__link--lowlight"
          }
          to="/how"
        >
          HOW TO
        </NavLink>
      </div>

      <NavLink to="/login">
        <JoinButton />
      </NavLink>
    </div>
  );
}

export default withRouter(NavBar);
