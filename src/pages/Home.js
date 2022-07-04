import { Appear, Project, Words } from "arwes";

const Home = props => {
  return <Appear id="home" animate show={props.entered}>
    <div style={{ padding: 20 }}>
            <Project
                animate
                header='LIGHT MANAGEMENT SYSTEM : LIMASY DE SWATEK'
            >
                {anim => (
                    <p><h3>
                        <Words animate show={anim.entered}>
                            SOLUTION IOT POUR REDUIRE LA FACTURE ENERGETIQUE DANS LES ECLAIRAGES PUBLICS :
                        </Words>
                        </h3>
                        <Words animate show={anim.entered}>
                            L’éclairage des villes est un des facteurs principaux du confort et de la sécurité des habitants. 
                            Pourtant la grande majorité des installations d’éclairage public sont vétustes et pèsent lourdement 
                            dans les dépenses énergétiques des villes.
                            Se munir d’infrastructures rénovées permet à la fois à de réduire la consommation d’énergie, 
                            de fournir un niveau d’éclairage adapté et de garantir la sécurité des habitants.
                            SWATEK modernise votre réseau d’éclairage des villes pour le rendre intelligent et le connecte 
                            aux nouveaux services de gestion et de communication.
                        </Words></p>
                )}
            </Project>
        </div>
  </Appear>
};

export default Home;