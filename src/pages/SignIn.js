import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const SignIn = props => {
    return <Appear id="signin" animate show={props.entered}>
    <Paragraph>If you already have an account, you can just sign in :</Paragraph>

    <form onSubmit={props.submitSignIn} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" default="admin" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit"
          disabled={props.isPendingSignIn}>
          Sign In ✔
        </Button>
      </Clickable>
      {props.isPendingSignIn &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default SignIn;