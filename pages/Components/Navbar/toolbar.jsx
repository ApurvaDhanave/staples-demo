import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import logo from "../logo.png";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useSession, signIn, signOut } from "next-auth/react";
import { NavbarData } from "../../../Data/NavbarData";
import Box from "@mui/material/Box";
import CartDrawer from "./drawer";

function Navbar() {
  const { data: session } = useSession();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const StyledAppBar = styled(AppBar)`
    background-color: #c00;
    width: 100%;
  `;
  const [anchorPrimaryMenu, setAnchorPrimaryMenu] = useState(null);
  const [anchorSecondaryMenu, setAnchorSecondaryMenu] = useState(null);
  const [anchorSignInMenu, setAnchorSignInMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = () => {
    setDrawerOpen(false);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Image src={logo}></Image>
        {NavbarData.length > 0 &&
          NavbarData.map((e) => {
            if (e.moduleName === "Search") {
              return (
                <TextField
                  variant="outlined"
                  edge="start"
                  placeholder="Search"
                  sx={{
                    backgroundColor: "white",
                    flex: "1",
                    width: "200px",
                    height: "44px",
                    marginRight: "10px",
                    borderRadius: "11px",
                    paddingLeft: "10px",
                    paddingRight: "30px", // Increased paddingRight to make space for the icon
                    border: "none",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiOutlinedInput-input": {
                      height: "13px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "absolute",
                          right: "5px", // Adjust the right position as needed
                          top: "0",
                          bottom: "0",
                          color: "#c00", // Set the icon color to #c00
                        }}
                      >
                        <SearchIcon />
                      </Box>
                    ),
                  }}
                />
              );
            } else if (e.moduleName === "Cart") {
              return (
                <MenuItem
                  onClick={() => {
                    setDrawerOpen(true);
                  }}
                >
                  {e.icon ? <e.icon /> : ""}
                  <span> </span>
                  {e.showModuleName ? e.moduleName : ""}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem>
                  {e.icon ? <e.icon /> : ""}
                  <span> </span>
                  {e.showModuleName ? e.moduleName : ""}
                </MenuItem>
              );
            }
          })}
      </Toolbar>
      {isDrawerOpen && (
        <CartDrawer isOpen={isDrawerOpen} onClose={handleCartClick} />
      )}
    </StyledAppBar>
  );
}

export default Navbar;
