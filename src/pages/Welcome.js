import { Appear, Project, Words } from "arwes";

const Welcome = ({ entered, user }) => {
    return <Appear id="welcome" animate show={entered}>
      <div style={{ padding: 20 }}>
            <Project
                animate
                header={`Welcome ${user.lastName} !`}
            >
                {anim => (
                    <p><h3>
                        <Words animate show={anim.entered}>
                            Information about your application :
                        </Words>
                        </h3>
                        <Words animate show={anim.entered}>
                            Gateway : Esp8266
                        </Words>
                        <Words animate show={anim.entered}>
                            Device : STM32 Nucleo
                        </Words>
                    </p>
                )}
            </Project>
        </div>
    </Appear>
  };
  
  export default Welcome;