import Head from "next/head";

import Hero from "../components/hero";
import Services from "../components/services";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`Muck & Tire`}</title>
        <meta name="description" content="Making Technology Simple" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Simplexology Lab" />
        <meta name="og:site_name" content="Simplexology Lab" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Hero
          title={`Muck & Tire`}
          tagline="Make Your Mark"
          description={`A digital media company that enjoys getting out in the muck and mire; helping people find dirt; one tire at a time!`}
          link_text={`View Our Youtube Channel`}
          link_url="https://www.youtube.com/channel/UCWiZL60s0p5gPz7ldnf6iMg"
        />
        <Services />
        <About
          title={`About Us`}
          tagline={`Our mission is to bring muck (mud) and riders together, one tire at a time.`}
          description={`Fueled by our deep interests in going offroad and technology; we want to connect more people to the outdoors. As our world becomes more and more digital, we don't see it as picking sides; rather how can we blend the two to enhance the experience.`}
        />
        {/* <Mission /> */}
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
