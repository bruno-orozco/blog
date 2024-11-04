import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import * as Fathom from "fathom-client";
import { ThemeProvider } from "../contexts/ThemeContext";
import Layout from "../components/Layout";
import * as config from "../lib/config";
import { defaultSeo, socialProfileJsonLd } from "../lib/config/seo";
import { themeClassNames } from "../lib/config/themes";
import { globalStyles } from "../lib/styles/stitches.config";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import "@mantine/charts/styles.css";

// Important instructions for Mantine Data-Table v7
// https://icflorescu.github.io/mantine-datatable/styling/

// Import the mantine-core layer CSS file;
// this will automatically place it in a `mantine` layer
import "@mantine/core/styles.layer.css";

// Import the mantine-datatable layer CSS file;
// this will automatically place it in a `mantine-datatable` layer
import "mantine-datatable/styles.layer.css";

// Import your own CSS file;
// make sure to specify the layers order with the `@layer` directive
// inside that file
import "./layout.css";

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // get this page's URL with full domain, and hack around query parameters and anchors
  // NOTE: this assumes trailing slashes are enabled in next.config.js
  const canonical = `${config.baseUrl}${router.pathname === "/" ? "" : router.pathname}/`;
  useEffect(() => {
    // don't track pageviews on branch/deploy previews and localhost
    if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") {
      return;
    }

    // https://usefathom.com/docs/integrations/next
    // https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
    Fathom.load(config.fathomSiteId, {
      includedDomains: [config.siteDomain],
      // we trigger pageview sending manually below, don't also do it on script load
      auto: false,
    });

    const onRouteChangeComplete = (url: string) => {
      Fathom.trackPageview({ url });
    };

    // needs to be triggered manually on link clicks (the page doesn't actually change)
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      // unassign event listener
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  // inject body styles defined in ../lib/styles/stitches.config.ts
  globalStyles();

  // allow layout overrides per-page, but default to plain `<Layout />`
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <DefaultSeo
        // all SEO config is in ../lib/config/seo.ts except for canonical URLs, which require access to next router
        {...defaultSeo}
        canonical={canonical}
        openGraph={{
          ...defaultSeo.openGraph,
          url: canonical,
        }}
        // don't let search engines index branch/deploy previews
        dangerouslySetAllPagesToNoIndex={process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"}
        dangerouslySetAllPagesToNoFollow={process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"}
      />
      <SocialProfileJsonLd {...socialProfileJsonLd} />
      <MantineProvider>
        <ThemeProvider classNames={themeClassNames}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </MantineProvider>
    </>
  );
};

export default App;
