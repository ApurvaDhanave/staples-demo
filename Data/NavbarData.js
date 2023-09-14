import ListIcon from "@mui/icons-material/List";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
const icons = {
  menu: ListIcon,
  cart: ShoppingCartOutlinedIcon,
  user: PermIdentityIcon,
  help: HelpOutlineIcon,
  search: SearchIcon,
};

export const NavbarData = [
  {
    moduleName: "Shop",
    icon: "",
    showModuleName: true,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "Deals",
    showModuleName: true,
    icon: "",
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "Services",
    icon: "",
    showModuleName: true,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "Search",
    showModuleName: true,
    icon: icons.search,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "List",
    showModuleName: true,
    icon: icons.menu,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "Help",
    showModuleName: true,
    icon: icons.help,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },

  {
    moduleName: "Sign In",
    showModuleName: true,
    icon: icons.user,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
  {
    moduleName: "Cart",
    showModuleName: false,
    icon: icons.cart,
    subModules: [
      {
        moduleName: "Module 1",
      },
      {
        moduleName: "Module 2",
      },
      {
        moduleName: "Module 3",
      },
    ],
  },
];
