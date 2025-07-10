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
          id="giscus-comments"
          repo={githubRepo as `${string}/${string}`}
          repoId={giscusConfig.repoId}
          category={giscusConfig.category}
          categoryId={giscusConfig.categoryId}
          mapping="specific"
          term={title}
          strict="1"
          reactionsEnabled="1"
          emitMetadata="1"
          lang="es"
          theme={activeTheme === "dark" ? "dark" : "light"}
        />
      </Wrapper>
    </div>
  );
};

export default memo(Comments);
