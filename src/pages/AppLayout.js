import {
  useState,
} from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Frame,
  withSounds,
  withStyles,
} from "arwes";

import useUser from "../hooks/useUser";
import usePower from "../hooks/usePower";
import useScenario from "../hooks/useScenario";
import useCurrent from "../hooks/useCurrent";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";
import useSignOut from "../hooks/useSignOut";


import Centered from "../components/Centered";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivateRoute from "../components/PrivateRoute";

import Home from './Home';
import Welcome from "./Welcome";
import LightManagement from "./LightManagement";
import Power from './Power';
import Scenario from "./Scenario";
import Current from './Current';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";

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

  const { user } = useUser();
  const { currents } = useCurrent();
  const {
    isPendingPowerOn1,
    isPendingPowerOff1,
    isPendingPowerOn2,
    isPendingPowerOff2,
    isPendingPowerOn3,
    isPendingPowerOff3,
    submitPowerOnLine1,
    submitPowerOffLine1,
    submitPowerOnLine2,
    submitPowerOffLine2,
    submitPowerOnLine3,
    submitPowerOffLine3,
  } = usePower(onSuccessSound, onFailureSound);
  const { 
    isPendingScenario1,
    submitScenario1,
   } = useScenario(onSuccessSound, onFailureSound);
  const {
    isPendingSignIn,
    submitSignIn,
  } = useSignIn(onSuccessSound, onFailureSound);
  const {
    isPendingSignUp,
    submitSignUp,
  } = useSignUp(onSuccessSound, onFailureSound);
  const {
    isPendingSignOut,
    submitSignOut,
  } = useSignOut(onSuccessSound);
  
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
            <PrivateRoute exact path="/">
              <Welcome 
                entered={anim.entered}
                use={user} />
            </PrivateRoute>
            <PrivateRoute exact path="/welcome">
              <Welcome 
                entered={anim.entered}
                use={user} />
            </PrivateRoute>
            <PrivateRoute exact path="/lightmanagement">
              <LightManagement
                entered={anim.entered} />
            </PrivateRoute>
            <PrivateRoute exact path="/current">
              <Current
                entered={anim.entered}
                currents={currents} />
            </PrivateRoute>
            <PrivateRoute exact path="/power">
              <Power
                entered={anim.entered}
                submitPowerOnLine1={submitPowerOnLine1}
                submitPowerOffLine1={submitPowerOffLine1}
                submitPowerOnLine2={submitPowerOnLine2}
                submitPowerOffLine2={submitPowerOffLine2}
                submitPowerOnLine3={submitPowerOnLine3}
                submitPowerOffLine3={submitPowerOffLine3}
                isPendingPowerOn1={isPendingPowerOn1}
                isPendingPowerOff1={isPendingPowerOff1}
                isPendingPowerOn2={isPendingPowerOn2}
                isPendingPowerOff2={isPendingPowerOff2}
                isPendingPowerOn3={isPendingPowerOn3}
                isPendingPowerOff3={isPendingPowerOff3} />
            </PrivateRoute>
            <PrivateRoute exact path="/scenario">
              <Scenario 
                entered={anim.entered}
                isPendingScenario1={isPendingScenario1}
                submitScenario1={submitScenario1} />
            </PrivateRoute>
            <PrivateRoute exact path="/signout">
              <SignOut 
                entered={anim.entered}
                submitSignOut={submitSignOut}
                isPendingSignOut={isPendingSignOut} />
            </PrivateRoute>
            <Route 
              exact path="/signin"
              render={() => localStorage.getItem('token') ? 
                (<Redirect to='/' />) 
                : 
                (<SignIn
                  entered={anim.entered}
                  submitSignIn={submitSignIn}
                  isPendingSignIn={isPendingSignIn} />)} />
            <Route 
              exact path="/signup"
              render={() => localStorage.getItem('token') ? 
                (<Redirect to='/' />) 
                : 
                (<SignUp
                  entered={anim.entered}
                  submitSignUp={submitSignUp}
                  isPendingSignUp={isPendingSignUp} />)} />
          </Switch>
          </div>
        )}
      </Frame>
    </Centered>
    <Footer />
  </div>;
};

export default withSounds()(withStyles(styles)(AppLayout));