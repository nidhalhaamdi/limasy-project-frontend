import { Appear, Button, Loading, Content, Highlight } from "arwes";
import Clickable from "../components/Clickable";

const Power = props => {
  const style = { display: 'inline-block' };

  const Line1 = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Content style={{ margin: 20 }}>
          <blockquote>Control Line 1 :</blockquote>
        </Content>
        <form onSubmit={props.submitPowerOnLine1} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='success' 
              disabled={props.isPendingPowerOn1}>
              <h2><i className="material-icons">power</i> ON</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOn1 &&
            <Loading animate small />
          }
        </form>
        <form onSubmit={props.submitPowerOffLine1} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='alert' 
              disabled={props.isPendingPowerOff1}>
              <h2><i className="material-icons">power_off</i> OFF</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOff1 &&
            <Loading animate small />
          }
        </form>
      </div>
    );
  };

  const Line2 = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Content style={{ margin: 20 }}>
          <blockquote>Control Line 2 :</blockquote>
        </Content>
        <form onSubmit={props.submitPowerOnLine2} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='success'
              disabled={props.isPendingPowerOn2}>
              <h2><i className="material-icons">power</i> ON</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOn2 &&
            <Loading animate small />
          }
        </form>
        <form onSubmit={props.submitPowerOffLine2} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='alert'
              disabled={props.isPendingPowerOff2}>
              <h2><i className="material-icons">power_off</i> OFF</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOff2 &&
            <Loading animate small />
          }
        </form>
      </div>
    );
  };

  const Line3 = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Content style={{ margin: 20 }}>
          <blockquote>Control Line 3 :</blockquote>
        </Content>
        <form onSubmit={props.submitPowerOnLine3} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='success' 
              disabled={props.isPendingPowerOn3}>
              <h2><i className="material-icons">power</i> ON</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOn3 &&
            <Loading animate small />
          }
        </form>
        <form onSubmit={props.submitPowerOffLine3} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
          <Clickable>
            <Button animate 
              show={props.entered} 
              type="submit"
              layer='alert' 
              disabled={props.isPendingPowerOff3}>
              <h2><i className="material-icons">power_off</i> OFF</h2>
            </Button>
          </Clickable>
          {props.isPendingPowerOff3 &&
            <Loading animate small />
          }
        </form>
      </div>
    );
  };

  return <Appear id="power" animate show={props.entered}>
      <Highlight style={style}>
        <Line1 />
        <Line2 />
        <Line3 />
      </Highlight>
  </Appear>
};

export default Power;