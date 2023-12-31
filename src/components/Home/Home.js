import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import logo from "./kloc-white-logo.png";
import "./index.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='home-container'>
        <div className='headerContainer'>
          <div className='headerLogoContainer'>
            <img
              src={logo}
              alt='logo'
              style={{ height: "120px", width: "120px", marginTop: "10px" }}
            />
          </div>
          <div className='desktopHeaderNavbarContainer'>
            <p
              onClick={() => navigate("/")}
              className='headerDesktopNavbarLink'
            >
              Home
            </p>
            <p
              onClick={() => navigate("/studentLogin")}
              className='headerDesktopNavbarLink'
            >
              Student
            </p>
            <p
              onClick={() => navigate("/adminLogin")}
              className='headerDesktopNavbarLink'
            >
              Admin
            </p>
          </div>
          <div className='admin-mobile-header-navbar-container'>
            <Popup
              contentStyle={{
                width: "60%",
                backgroundColor: "white",
                textAlign: "center",
              }}
              trigger={
                <button className='admin-hamburger-btn'>
                  <GiHamburgerMenu />
                </button>
              }
              position='bottom right'
            >
              <ul className='admin-mobile-hamburger-menu'>
                <li onClick={() => navigate("/")} className='headerNavbarLink'>
                  Home
                </li>
                <li
                  onClick={() => navigate("/studentLogin")}
                  className='headerNavbarLink'
                >
                  Student
                </li>
                <li
                  onClick={() => navigate("/adminLogin")}
                  className='headerNavbarLink'
                >
                  Admin
                </li>
              </ul>
            </Popup>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            height: "70vh",
            backgroundSize: "cover",
          }}
        >
          <h1 className='welcome-heading'>
            Welcome to Assessments Made Simple
          </h1>
          <br />
          <h1 className='welcome-heading'>KLoc Technologies Pvt Ltd</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
