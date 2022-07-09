import { 
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";

import useSignOut from "../hooks/useSignOut";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {
    display: "inherit",
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 24,
  },
  clickable: {
    fontSize: 18,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 20,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 14,
    }
  },
});

const Header = props => {
  const { classes, onNav, ...rest } = props;

  const { submitSignOut } = useSignOut();

  return <ArwesHeader animate>
    <Centered className={classes.root} {...rest}>
      <Logo animate size={50} className={classes.logo} layer="header" />
      <Words animate className={classes.banner}>
        LIMASY Dashboard
      </Words>
      {localStorage.getItem('token') ? (
              <nav className={`${classes.nav}`}>
                <Clickable className={classes.clickable} onClick={onNav}>
                  <Highlight className={classes.button} animate layer="header">
                    <Link className={classes.link} to="/home">
                    <i className="material-icons">home</i>Home</Link>
                  </Highlight>
                </Clickable>
                <Clickable className={classes.clickable} onClick={onNav}>
                  <Highlight className={classes.button} animate layer="header">
                    <Link className={classes.link} to="/power">
                    <i className="material-icons">power_settings_new</i>Power ON/OFF</Link>
                  </Highlight>
                </Clickable>
                <Clickable className={classes.clickable} onClick={onNav}>
                  <Highlight className={classes.button} animate layer="header">
                    <Link className={classes.link} to="/current">
                      <i className="material-icons">flash_on</i>Current Value
                    </Link>
                  </Highlight>
                </Clickable>
                <Clickable className={classes.clickable} onClick={submitSignOut}>
                  <Highlight className={classes.button} animate layer="header">
                    <Link className={classes.link} to="/signout">
                      <i className="material-icons">logout</i>Sign Out
                    </Link>
                  </Highlight>
                </Clickable>
              </nav>
            ) : (
              <nav className={`${classes.nav}`}>
              <Clickable className={classes.clickable} onClick={onNav}>
                <Highlight className={classes.button} animate layer="header">
                  <Link className={classes.link} to="/home">
                  <i className="material-icons">home</i>Home</Link>
                </Highlight>
              </Clickable>
              <Clickable className={classes.clickable} onClick={onNav}>
                <Highlight className={classes.button} animate layer="header">
                  <Link className={classes.link} to="/signin">
                    <i className="material-icons">login</i>signIn
                  </Link>
                </Highlight>
              </Clickable>
              <Clickable className={classes.clickable} onClick={onNav}>
                <Highlight className={classes.button} animate layer="header">
                  <Link className={classes.link} to="/signup">
                    <i className="material-icons">app_registration</i>Sign Up
                  </Link>
                </Highlight>
              </Clickable>
            </nav>
            )}
    </Centered>
  </ArwesHeader>
};

export default withStyles(styles)(Header);