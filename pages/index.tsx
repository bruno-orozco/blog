import Link, { LinkProps } from "../components/Link";
import { styled, keyframes, darkTheme } from "../lib/styles/stitches.config";

export type RecordType = {
  date: string;
  dateAsNumber: number;
  jacks: number;
  meditation: number;
  pullups: number;
  pushups: number;
  situps: number;
  stairs: number;
};

const ColorfulLink = ({
  lightColor,
  darkColor,
  css,
  ...rest
}: LinkProps & {
  lightColor: string;
  darkColor: string;
}) => {
  return (
    <Link
      css={{
        color: lightColor,
        setUnderlineVars: { color: lightColor },

        [`.${darkTheme} &`]: {
          color: darkColor,
          setUnderlineVars: { color: darkColor },
        },

        ...css,
      }}
      {...rest}
    />
  );
};

const H1 = styled("h1", {
  margin: "0 0 0.5em -1px", // misaligned left margin, super nitpicky
  fontSize: "2em",
  fontWeight: 500,
  lineHeight: 1.1,
  color: "$text",
  textAlign: "center",
  "@medium": {
    fontSize: "1.6em",
  },
});

const H2 = styled("h2", {
  margin: "1.5em 0 0.5em -1px",
  fontSize: "1.35em",
  fontWeight: 400,
  lineHeight: 1.4,
  color: "$text",

  "@medium": {
    fontSize: "1.25em",
  },
});

const Paragraph = styled("p", {
  margin: "1em 0",
  lineHeight: 1.8,
  color: "$text",
  fontSize: "1.05em",
  "&:last-of-type": {
    marginBottom: 0,
  },
  "@medium": {
    fontSize: "1em",
    lineHeight: 1.85,
  },
});

const Wave = styled("span", {
  display: "inline-block",
  marginLeft: "0.1em",
  fontSize: "1.1em",

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${keyframes({
      "0%": { transform: "rotate(0deg)" },
      "5%": { transform: "rotate(14deg)" },
      "10%": { transform: "rotate(-8deg)" },
      "15%": { transform: "rotate(14deg)" },
      "20%": { transform: "rotate(-4deg)" },
      "25%": { transform: "rotate(10deg)" },
      "30%": { transform: "rotate(0deg)" },
      // pause for ~9 out of 10 seconds
      "100%": { transform: "rotate(0deg)" },
    })} 5s ease 1s infinite`,
    transformOrigin: "65% 80%",
    willChange: "transform",
  },
});

const Index = () => {
  return (
    <>
      <H1>
        ¡Hola, soy Bruno Orozco Mejía! <Wave>👋</Wave>
      </H1>

      <Paragraph>
        Soy un desarrollador de software apasionado por transformar ideas en soluciones tecnológicas. Con varios años de
        experiencia, me dedico a crear aplicaciones y sistemas que mejoran la vida de las personas y facilitan el
        trabajo en equipo.
      </Paragraph>

      <Paragraph>
        <em>💡 Mi filosofía:</em> Creo en el poder de la tecnología para simplificar lo complejo. Trabajo para que las
        soluciones digitales sean tan fáciles de usar como efectivas.
      </Paragraph>

      <Paragraph>
        🌟 ¿Quieres conocer mi trabajo a detalle? <br />
        <ColorfulLink
          href="./cv/" // replace with actual CV file path
          title="Descargar mi CV Profesional"
          lightColor="rgb(128, 159, 255)"
          darkColor="#FFA500"
          css={{
            display: "inline-block",

            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            [`.${darkTheme} &`]: {},
          }}
        >
          Consulta mi CV completo aquí
        </ColorfulLink>
      </Paragraph>

      <H2>📞 Contacto</H2>
      <Paragraph>
        ¡Conversemos! Si tienes alguna idea o proyecto en mente, me encantaría escucharlo. Estoy abierto a explorar
        nuevas oportunidades y colaboraciones.
      </Paragraph>
      <Paragraph>
        📧 Correo:{" "}
        <ColorfulLink
          href="mailto:om_bruno@icloud.com"
          title="Email Bruno Orozco"
          lightColor="#1091b3"
          darkColor="#6fcbe3"
        >
          om_bruno@icloud.com
        </ColorfulLink>
        <br />
        📱 Teléfono: +52 56 50 69 73 41 <br />
        🔗 LinkedIn:{" "}
        <ColorfulLink
          href="https://linkedin.com/in/orozco-bruno"
          title="Bruno Orozco on LinkedIn"
          lightColor="#0073b1"
          darkColor="#3b9dd2"
        >
          linkedin.com/in/orozco-bruno
        </ColorfulLink>
      </Paragraph>
    </>
  );
};

export default Index;
