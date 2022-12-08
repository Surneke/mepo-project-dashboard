import Logo from "../images/black.png";
import listIcon from "../icon/List.svg";
import usersIcon from "../icon/Users.svg";
import loginIcon from "../icon/Login.svg";
import { useState, useEffect } from "react";
import { LogoutModal } from "./logoutModal";
import tShirtIcon from "../icon/T-shirt.svg";
import { Link, useLocation} from "react-router-dom";
import { useGlobalProvider } from "../context/GlobalContext";
import { AppBar, Box, CssBaseline, Divider, Drawer,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const ResponsiveDrawer = (props) => {
  const { window } = props;
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    navName: { navbarName, setNavbarName },
  } = useGlobalProvider();
  useEffect(() => {
    (() => {
      switch (pathname) {
        case "/products":
          return setNavbarName("Products");
        case "/users":
          return setNavbarName("Users");
        default:
          return setNavbarName("Orders");
      }
    })();
  }, [pathname, setNavbarName]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box mt="35px">
      <List>
        {list.map((el, index) => (
          <Link
            to={el.path}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "#000",
            }}
            key={index}
          >
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img alt="icon" src={el.icon} />
                </ListItemIcon>
                <ListItemText onClick={() => setNavbarName(el.name)} primary={el.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider sx={{ mb: "30px", mt: "30px", padding: "0 30px" }} />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img alt="icon" src={loginIcon} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
            <LogoutModal />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ffff",
        }}
      >
        <Toolbar sx={{ height: "64px" }}>
          <Typography variant="h6" noWrap component="div">
            {navbarName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <img alt="logo" src={Logo} />
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#f2f2f9",
        }}
      ></Box>
    </Box>
  );
};

const list = [
  {
    number: 0,
    name: "Orders",
    path: "/orders",
    icon: listIcon,
  },
  {
    number: 1,
    name: "Users",
    path: "/users",
    icon: tShirtIcon,
  },
  {
    number: 2,
    name: "Producs",
    path: "/products",
    icon: usersIcon,
  },
];

const drawerWidth = 250;