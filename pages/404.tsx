import { NextSeo } from "next-seo";
import Image from "../components/Image";
import Link from "../components/Link";
import { styled } from "../lib/styles/stitches.config";

import pandaGif from "../public/static/images/angry-panda.gif";

const Center = styled("div", {
  textAlign: "center",
});

const H1 = styled("h1", {
  fontSize: "1.8em",
  fontWeight: 500,
  color: "$text",

  "@medium": {
    fontSize: "1.6em",
  },
});

const FourOhFour = () => {
  return (
    <>
      <NextSeo description="La página que buscas no está disponible. Vuelve al inicio para seguir navegando en nuestro sitio." />

      <Center>
        <Image src={pandaGif} alt="404: El panda está molesto porque no encontró la página" quality={30} />

        <H1>404: Página No Encontrada 😢</H1>
        <p>Lo sentimos, no pudimos encontrar la página que estás buscando.</p>

        <Link href="/" aria-label="Volver a la página de inicio">
          Volver al inicio
        </Link>
      </Center>
    </>
  );
};

export default FourOhFour;
