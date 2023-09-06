import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../logo.png";
import Image from "next/image";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  const StyledAppBar = styled(AppBar)`
    background-color: #c00;
    width: 100%;
  `;
  const [anchorPrimaryMenu, setAnchorPrimaryMenu] = useState(null);
  const [anchorSecondaryMenu, setAnchorSecondaryMenu] = useState(null);
  const [anchorSignInMenu, setAnchorSignInMenu] = useState(null);

  const handlePrimaryMenuOpen = (event) => {
    setAnchorPrimaryMenu(event.currentTarget);
  };

  const handleSecondaryMenuOpen = (event) => {
    setAnchorSecondaryMenu(event.currentTarget);
  };
  const handleSignInMenuOpen = (event) => {
    setAnchorSignInMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorPrimaryMenu(null);
    setAnchorSecondaryMenu(null);
    setAnchorSignInMenu(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Image src={logo}></Image>

        <MenuItem onClick={handleMenuClose}>Shop</MenuItem>
        <MenuItem onClick={handleMenuClose}>Deals</MenuItem>
        <MenuItem onClick={handleMenuClose}>Services</MenuItem>

        <TextField
          label="Search"
          variant="outlined"
          size="small"

          // You can add more props here as needed
        />
        <IconButton
        // onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleSecondaryMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        {session ? (
          <MenuItem
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => signOut()}
          >
            <PersonOutlineIcon />
            {`Welcome, ${session?.user?.name}`}
          </MenuItem>
        ) : (
          <MenuItem
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => signIn("google")}
          >
            <PersonOutlineIcon /> Sign In
          </MenuItem>
        )}
        <Menu
          anchorEl={anchorSecondaryMenu}
          open={Boolean(anchorSecondaryMenu)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Services</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
