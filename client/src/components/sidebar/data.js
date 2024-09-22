// data.js
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleIcon from "@mui/icons-material/People";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MenuIcon from "@mui/icons-material/Menu";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export const menuAdmin = [
  {
    id: 1,
    title: "MAIN", 
    items: [
      { id: 101, label: "Dashboard", icon: DashboardIcon, url: "/" },
    ],
  },
  {
    id: 2,
    title: "SHOP", 
    items: [
      { id: 201, label: "List", icon: StoreIcon, url: "/shops" },
      { id: 202, label: "Check Shop", icon: AssignmentTurnedInIcon, url: "/check-shop" },
    ],
  },
  {
    id: 3,
    title: "USER",
    items: [
      { id: 301, label: "List", icon: PeopleIcon, url: "/users" },
      { id: 302, label: "Check User", icon: HowToRegIcon, url: "/users-check" },
    ],
  },
  {
    id: 4,
    title: "ADVERTISING & PROMOTION",
    items: [
      { id: 401, label: "Advertisement", icon: LocalOfferIcon, url: "/advertisement" },
    ],
  },
  {
    id: 5,
    title: "CATEGORY",
    items: [
      { id: 501, label: "List Category", icon: StoreIcon, url: "/categories" },
      { id: 502, label: "List Product", icon: ShoppingCart, url: "/products" },
    ],
  },
  {
    id: 6,
    title: "USEFUL",
    items: [
      { id: 601, label: "Statistical", icon: InsertChartIcon, url: "/stats" },
      { id: 602, label: "Chat", icon: MessageOutlinedIcon, url: "/mess" },
      { id: 603, label: "Menu/Item", icon: MenuIcon, url: "/menu_item" },
      { id: 604, label: "Settings", icon: SettingsApplicationsIcon, url: "/settings" },
    ],
  },
  {
    id: 7,
    title:"ACCOUNT",
    items: [
      { id: 701, label: "Profile", icon: AccountCircleOutlinedIcon, url: "/profile" },
      { id: 702, label: "Logout", icon: ExitToAppIcon, url: "/login" },
    ],
  },
];


export const userAdmin = [
  {
    id: 1,
    title: "MAIN", 
    items: [
      { id: 101, label: "Dashboard", icon: DashboardIcon, url: "/" },
    ],
  },
  {
    id: 2,
    title: "SHOP", 
    items: [
      { id: 201, label: "Profile", icon: StoreIcon, url: "/profile" },
      { id: 202, label: "Check Shop", icon: AssignmentTurnedInIcon, url: "/check-shop" },
    ],
  },
  {
    id: 3,
    title: "USER",
    items: [
      { id: 301, label: "List", icon: PeopleIcon, url: "/users" },
      { id: 302, label: "Check User", icon: HowToRegIcon, url: "/users-check" },
    ],
  },
  {
    id: 4,
    title: "ADVERTISING & PROMOTION",
    items: [
      { id: 401, label: "Advertisement", icon: LocalOfferIcon, url: "/advertisement" },
    ],
  },
  {
    id: 5,
    title: "CATEGORY & PRODUCT",
    items: [
      { id: 501, label: "List Category", icon: StoreIcon, url: "/categories" },
      { id: 502, label: "List Product", icon: ShoppingCart, url: "/products" },
    ],
  },

  { 
    id: 6,
    title: "USEFUL",
    items: [
      { id: 601, label: "Statistical", icon: InsertChartIcon, url: "/stats" },
      { id: 602, label: "Chat", icon: MessageOutlinedIcon, url: "/mess" },
      { id: 603, label: "Menu/Item", icon: MenuIcon, url: "/menu_item" },
      { id: 604, label: "Settings", icon: SettingsApplicationsIcon, url: "/settings" },
    ],
  },
  {
    id: 7,
    title:"ACCOUNT",
    items: [
      { id: 701, label: "Profile", icon: AccountCircleOutlinedIcon, url: "/profile" },
      { id: 702, label: "Logout", icon: ExitToAppIcon, url: "/login" },
    ],
  },
];
