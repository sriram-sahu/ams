import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./kloc-white-logo.png";

const StudentNavbar = (props) => {
  return (
    <div>
      <AppBar position='static' sx={{ backgroundColor: "#1d1a69" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div className='admin-header-logo-container'>
            {/* logo */}
            <img
              // src='https://res.cloudinary.com/de5cu0mab/image/upload/v1688968121/kloc-white-logo_ct8uhz.png'
              src={logo}
              alt='logo'
              style={{ width: "120px" }}
            />
          </div>
          <Typography variant='h6' component='div'>
            User: {props.email}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default StudentNavbar;
