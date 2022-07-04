import {
  useState,
} from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

import usePower from "../hooks/usePower";
import useCurrent from "../hooks/useCurrent";

import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Home from './Home';
import Power from './Power';
import Current from './Current';

const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "auto",
  },
  centered: {
    flex: 1,
    paddingTop: "20px",
    paddingBottom: "10px",
  },
});

const AppLayout = props => {
  const { sounds, classes } = props;

  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  const { currents } = useCurrent();
  const {
    isPendingPowerOn,
    isPendingPowerOff,
    submitPowerOn,
    submitPowerOff,
  } = usePower(onSuccessSound, onFailureSound);
  
  return <div className={classes.content}>
    <Header onNav={animateFrame} />
    <Centered className={classes.centered}>
      <Frame animate 
        show={frameVisible} 
        corners={4} 
        style={{visibility: frameVisible ? "visible" : "hidden"}}>
        {anim => (
          <div style={{padding: "20px"}}>
          <Switch>
            <Route exact path="/">
              <Home
                entered={anim.entered} />
            </Route>
            <Route exact path="/home">
              <Home
                entered={anim.entered} />
            </Route>
            <Route exact path="/current">
              <Current
                entered={anim.entered}
                currents={currents} />
            </Route>
            <Route exact path="/power">
              <Power
                entered={anim.entered}
                submitPowerOn={submitPowerOn}
                submitPowerOff={submitPowerOff}
                isPendingPowerOn={isPendingPowerOn}
                isPendingPowerOff={isPendingPowerOff} />
            </Route>
          </Switch>
          </div>
        )}
      </Frame>
    </Centered>
    <Footer />
  </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));