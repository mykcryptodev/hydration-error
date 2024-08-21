import { Layout } from "@/components/Layout";
import OnchainProviders from "@/providers/OnchainProviders";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OnchainProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OnchainProviders>
  );
}
