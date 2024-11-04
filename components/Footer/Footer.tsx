import NextLink from "next/link";
import { ForkOcticon, NextjsLogo } from "../Icons";
import { keyframes, styled } from "../../lib/styles/stitches.config";
import * as config from "../../lib/config";
import type { ComponentProps } from "react";

const Wrapper = styled("footer", {
  width: "100%",
  padding: "1.25em 1.5em",
  borderTop: "1px solid $kindaLight",
  backgroundColor: "$backgroundOuter",
  color: "$mediumDark",
  transition: "background 0.25s ease, border 0.25s ease",
  "@medium": {
    padding: "1em 1.25em",
  },
});

const Row = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: "865px",
  margin: "0 auto",
  justifyContent: "space-between",
  fontSize: "0.85em",
  lineHeight: 2.3,

  // stack columns on left instead of flexboxing across
  "@medium": {
    fontSize: "0.8em",
    display: "block",
  },
});

const Link = styled(NextLink, {
  color: "$mediumDark",
  textDecoration: "none",
});

const NextjsLink = styled(Link, {
  "&:hover": {
    color: "$medium",
  },
});

const ViewSourceLink = styled(Link, {
  paddingBottom: "2px",
  borderBottom: "1px solid $light",

  "&:hover": {
    borderColor: "$kindaLight",
  },
});

const Icon = styled("svg", {
  width: "1.25em",
  height: "1.25em",
  verticalAlign: "-0.25em",
  margin: "0 0.075em",
  fill: "currentColor",
});

const Heart = styled("span", {
  display: "inline-block",
  color: "$error", // somewhat ironically color the heart with the themed "error" red... </3

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${keyframes({
      "0%": { transform: "scale(1)" },
      "2%": { transform: "scale(1.25)" },
      "4%": { transform: "scale(1)" },
      "6%": { transform: "scale(1.2)" },
      "8%": { transform: "scale(1)" },
      // pause for ~9 out of 10 seconds
      "100%": { transform: "scale(1)" },
    })} 10s ease 7.5s infinite`,
    willChange: "transform",
  },
});

export type FooterProps = ComponentProps<typeof Wrapper>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <Wrapper {...rest}>
      <Row>
        <div>
          Content{" "}
          <Link href="/license/" title="Bruno Orozco Mejía">
            © Bruno Orozco Mejía
          </Link>
          , {""}
          {new Date(process.env.NEXT_PUBLIC_RELEASE_DATE || Date.now()).getUTCFullYear()}.
        </div>
      </Row>
    </Wrapper>
  );
};

export default Footer;
