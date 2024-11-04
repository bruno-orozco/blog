import NextLink from "next/link";
import NextImage from "next/legacy/image";
import { styled } from "../../lib/styles/stitches.config";
import { authorName } from "../../lib/config";
import type { ComponentProps } from "react";

import selfieJpg from "../../public/static/images/me.jpg";

const Image = styled(NextImage, {
  display: "block",
  width: "50px",
  height: "50px",
  border: "1px solid $light",
  borderRadius: "50%",

  "@medium": {
    width: "70px",
    height: "70px",
    borderWidth: "2px",
  },
});

const Link = styled(NextLink, {
  display: "inline-flex",
  alignItems: "center",
  color: "$mediumDark",
  textDecoration: "none",

  "&:hover": {
    color: "$link",

    "@medium": {
      [`${Image}`]: {
        borderColor: "$linkUnderline",
      },
    },
  },
});

const Name = styled("span", {
  margin: "0 0.6em",
  fontSize: "1.2em",
  fontWeight: 500,
  lineHeight: 1,

  "@medium": {
    display: "none",
  },
});

export type SelfieProps = Omit<ComponentProps<typeof Link>, "href">;

const Selfie = ({ ...rest }: SelfieProps) => {
  return (
    <Link href="/" rel="author" title={authorName} {...rest}>
      <Image src={selfieJpg} alt={`Photo of ${authorName}`} width={50} height={50} quality={60} priority />
      <Name>{authorName}</Name>
    </Link>
  );
};

export default Selfie;
