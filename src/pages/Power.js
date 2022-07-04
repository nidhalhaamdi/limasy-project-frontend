import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const Power = props => {
  return <Appear id="power" animate show={props.entered}>
    <Paragraph>By clicking on ON/OFF buttons,</Paragraph>
    <Paragraph>We control the light on our device :</Paragraph>

    <form onSubmit={props.submitPowerOn} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit" 
          disabled={props.isPendingPowerOn}>
          <h2><i className="material-icons">power</i> ON</h2>
        </Button>
      </Clickable>
      {props.isPendingPowerOn &&
        <Loading animate small />
      }
    </form>
    <form onSubmit={props.submitPowerOff} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit" 
          disabled={props.isPendingPowerOff}>
          <h2><i className="material-icons">power_off</i> OFF</h2>
        </Button>
      </Clickable>
      {props.isPendingPowerOff &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default Power;