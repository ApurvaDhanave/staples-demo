// import React, { useState } from "react";
// import withStyles from "@material-ui/core/styles/withStyles";
// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Drawer,
// } from "@material-ui/core";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

// const styles = (theme) => ({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

// const DrawerComponent = (props) => {
//   console.log(props);
//   const { classes } = props;

//   const sideList = () => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={props.toggleDrawerHandler}
//       onKeyDown={props.toggleDrawerHandler}
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
//       {sideList()}
//     </Drawer>
//   );
// };

// export default withStyles(styles)(DrawerComponent);
// CartDrawer.js
import React, { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { CartContext } from "@/context/CartContext";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const cartContext = useContext(CartContext);
  console.log(cartContext.state);
  const handleRemoveFromCart = (product) => {
    cartContext.dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={{ width: "300px" }}>
        <IconButton
          onClick={onClose}
          style={{ position: "absolute", right: 0 }}
        >
          <CloseIcon
            onClick={() => {
              onClose();
            }}
          />
        </IconButton>
        <List>
          {cartContext.state.cart.length > 0 &&
            cartContext.state.cart.map((item) => (
              <ListItem key={item.id}>
                <div className="productsWrapper">
                  <div key={item.id} className="card">
                    <img className="imageClass" src={item.image} alt="img" />
                    <h4>{item.title}</h4>
                    <h5>{item.price}</h5>
                    <button
                      className="btn"
                      onClick={() => {
                        handleRemoveFromCart(item);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </ListItem>
            ))}
        </List>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
