import { Appear, Button, Content, Highlight, withStyles } from "arwes";
import { Link } from "react-router-dom";
import Clickable from "../components/Clickable";

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

const LightManagement = props => {
  const { classes } = props;
  const style = { display: 'inline-block' };

  const Auto = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Content style={{ margin: 20 }}>
          <blockquote>Automated Light Management :</blockquote>
        </Content>
        <Clickable>
        <Button animate 
            show={props.entered} 
            type="submit">
            <Link className={classes.link} to="/scenario">
                <h2>Enable Scenario 1 (Test)</h2>
            </Link>
        </Button>
        </Clickable>
      </div>
    );
  };

  const Manual = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Content style={{ margin: 20 }}>
          <blockquote>Control Light Manually :</blockquote>
        </Content>
        <Clickable>
            <Button animate 
                show={props.entered} 
                type="submit">
                    <Link className={classes.link} to="/power">
                        <h2>ON / OFF Buttons</h2>
                    </Link>
            </Button>
        </Clickable>
      </div>
    );
  };

  return <Appear id="power" animate show={props.entered}>
      <Highlight style={style}>
        <Auto />
        <Manual />
      </Highlight>
  </Appear>
};

export default withStyles(styles)(LightManagement);