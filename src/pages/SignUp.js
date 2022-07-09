import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const SignUp = props => {
    return <Appear id="signin" animate show={props.entered}>
    <Paragraph>If you don't have an account, you can sign up :</Paragraph>

    <form onSubmit={props.submitSignUp} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" />
      
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit" 
          disabled={props.isPendingSignUp}>
          Sign Up ✔
        </Button>
      </Clickable>
      {props.isPendingSignUp &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default SignUp;