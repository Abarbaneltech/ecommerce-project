import { Fragment, useEffect, useState } from "react";
import { useStyles } from "./styles";
import logo from "../../../partials/images/sneakers-transparent.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";
import { Badge, CircularProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  addToCart,
  cartHandler,
  getTotalPrice,
} from "../../redux/cart/cartSlice";

const pages = ["Store"];
const loggedIn = ["Account", "Logout"];
const loggedOut = ["Sign up", "Sign In"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth, user, status } = useSelector(state => state.auth);
  const { cartProducts, cartTotalQuantity, cartTotalAmount } = useSelector(
    state => state.cart
  );

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartTotalAmount, cartTotalQuantity]);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoggedInNavigator = value => {
    switch (value) {
      case "ACCOUNT":
        return navigate("/account");
      case "PROFILE":
        return navigate("/profile");
      case "LOGOUT":
        return dispatch(logout());
      default:
        break;
    }
  };

  const handleLoggedOutNavigator = value => {
    switch (value) {
      case "SIGN UP":
        return navigate("/register");
      case "SIGN IN":
        return navigate("/login");
      default:
        break;
    }
  };

  return (
    <div
      className={`${
        location.pathname === "/" ? classes.navbar : classes.container
      } navigation-container`}
    >
      <AppBar className={classes.navbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src={logo} className={classes.logo} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      onClick={() => navigate("/store")}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <img src={logo} className={classes.logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  sx={{
                    my: 2,
                    display: "block",
                    color: location.pathname === "/" ? "white" : "black",
                  }}
                  onClick={() => navigate("/store")}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {isAuth ? (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Button
                  sx={{
                    my: 2,
                    color: location.pathname === "/" ? "white" : "black",
                  }}
                >
                  Have fun, {user.full_name}
                </Button>
                <Button
                      sx={{
                        my: 2,
                        color: location.pathname === "/" ? "white" : "black",
                      }}
                    >
                      <Badge
                        badgeContent={cartTotalQuantity}
                        onClick={() => dispatch(cartHandler())}
                        color="primary"
                      >
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Button>
                {loggedIn.map(page => (
                  <Button
                    onClick={e => handleLoggedInNavigator(e.target.innerText)}
                    key={page}
                    sx={{
                      my: 2,
                      color: location.pathname === "/" ? "white" : "black",
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                {status === "loading" ? (
                  <CircularProgress />
                ) : (
                  <Fragment>
                    <Button
                      sx={{
                        my: 2,
                        color: location.pathname === "/" ? "white" : "black",
                      }}
                    >
                      <Badge
                        badgeContent={cartTotalQuantity}
                        onClick={() => dispatch(cartHandler())}
                        color="primary"
                      >
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Button>
                    {loggedOut.map(page => (
                      <Button
                        onClick={e =>
                          handleLoggedOutNavigator(e.target.innerText)
                        }
                        key={page}
                        sx={{
                          my: 2,
                          color: location.pathname === "/" ? "white" : "black",
                        }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Fragment>
                )}
              </Box>
            )}
            <Box sx={{ flexGrow: 0, display: { md: "none" } }}>
              <Tooltip title="Open loggedIn">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircle
                    style={{
                      fontSize: "30px",
                      color: location.pathname === "/" ? "white" : "black",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {isAuth
                  ? loggedIn.map(setting => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography
                          onClick={e =>
                            handleLoggedInNavigator(e.target.innerText)
                          }
                          textAlign="center"
                        >
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))
                    
                  : loggedOut.map(setting => (
                    <Fragment>
                      <MenuItem key={setting}>
                        <Typography
                          onClick={e =>
                            handleLoggedOutNavigator(
                              e.target.innerText.toUpperCase()
                              )
                            }
                            textAlign="center"
                        >
                          {setting}
                        </Typography>
                      </MenuItem>
                        </Fragment>
                    ))}
                         <Button
                      sx={{
                        my: 2,
                        color: location.pathname === "/" ? "white" : "black",
                      }}
                    >
                      <Badge
                        badgeContent={cartTotalQuantity}
                        onClick={() => dispatch(cartHandler())}
                        color="primary"
                      >
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Button>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navigation;
