// Base CSS File
import "@styles/globals.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";
import "@styles/scrollbar.css";
import "@styles/tailwind.css";
import "@styles/swiper-carousel.css";
import "@styles/custom-plugins.css";
import "@styles/themes.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// Other Files
import type { AppProps } from "next/app";
import TagManager from "react-gtm-module";

import Script from "next/script";
import { useEffect } from "react";
import ManagedModal from "@components/common/modal/managed-modal";
import { Analytics } from "@vercel/analytics/react";
import { ManagedUIContext } from "@contexts/ui.context";
import { getDirection } from "@utils/get-direction";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

const Noop: React.FC<Props> = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps, router }: AppProps) => {
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-KBP463R" });
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <ManagedUIContext>
          <Layout pageProps={pageProps} language={router.locale}>
            <Component {...pageProps} language={router.locale} />
            <Analytics />
          </Layout>
          <ManagedModal />
        </ManagedUIContext>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(CustomApp);
