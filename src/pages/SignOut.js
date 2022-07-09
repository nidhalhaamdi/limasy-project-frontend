import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const SignOut = props => {
    return <Appear id="signout" animate show={props.entered}>
    <Paragraph>Are you sure ?</Paragraph>

    <form onSubmit={props.submitSignOut} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit"
          disabled={props.isPendingSignOut}>
          Sign Out ✘
        </Button>
      </Clickable>
      {props.isPendingSignOut &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default SignOut;