import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const Scenario = props => {
    return (
        <Appear id="scenario" animate show={props.entered}>
            <Paragraph>Put Scenario Description here :</Paragraph>
            <form onSubmit={props.submitScenario1} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
                <Clickable>
                    <Button animate 
                    show={props.entered} 
                    type="submit" 
                    disabled={props.isPendingScenario1}>
                    <h2>Enable Scenario 1</h2>
                    </Button>
                </Clickable>
                {props.isPendingScenario1 &&
                    <Loading animate small />
                }
            </form>
        </Appear>
    );
};

export default Scenario;