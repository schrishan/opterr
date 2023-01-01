import Head from "next/head";
import Header from "../components/Header";
import OpterrHeroSection from "../components/OpterrHeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>OpterCSS - Perfect CSS utility suite</title>
        <meta name="description" content="OpterCSS framework is a lightweight, responsive and mobile-first CSS utility suite to accompany any front-end framework and static web pages as well." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="holder-fluid vh100 main-container bg">
          <Header/>
          <OpterrHeroSection/>
        </div>
      </main>
    </>
  );
}
