import { memo } from "react";
import Giscus from "@giscus/react";
import { useTheme } from "../../hooks/use-theme";
import { styled } from "../../lib/styles/stitches.config";
import { giscusConfig } from "../../lib/config";
import { githubRepo } from "../../lib/config";
import type { ComponentProps } from "react";
import type { GiscusProps } from "@giscus/react";

const Wrapper = styled("div", {
  marginTop: "2em",
  paddingTop: "2em",
  borderTop: "2px solid $light",
  minHeight: "300px",
});

export type CommentsProps = ComponentProps<typeof Wrapper> & {
  title: string;
};

const Comments = ({ title, ...rest }: CommentsProps) => {
  const { activeTheme } = useTheme();

  // TODO: use custom `<Loading />` spinner component during suspense
  return (
    <div>
      <Wrapper {...rest}>
        <Giscus
          {...(giscusConfig as GiscusProps)}
          term={title}
          mapping="specific"
          reactionsEnabled="1"
          emitMetadata="0"
          theme={activeTheme === "dark" ? activeTheme : "light"}
        />
      </Wrapper>
      <Wrapper {...rest}>
        <Giscus
          repo="bruno-orozco/blog"
          repoId={giscusConfig.repoId}
          category={giscusConfig.category}
          categoryId={giscusConfig.categoryId}
          term={title}
          mapping="specific"
          reactionsEnabled="1"
          emitMetadata="0"
          theme={activeTheme === "dark" ? activeTheme : "light"}
        />
      </Wrapper>
    </div>
  );
};

export default memo(Comments);
