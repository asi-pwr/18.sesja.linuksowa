import NavBar from '@/components/NavBar';
import Contact from '@/slices/Contact';
import PreviousEdition from '@/slices/PreviousEdition';
import Head from 'next/head';
import { SPEAKERS } from '../assets/speakers/speakersData';
import config from '../config';
import AboutUs from '../slices/AboutUs';
import HeadSlice from '../slices/HeadSlice';
import Map from '../slices/Map';
import Speakers from '../slices/Speakers';
import Sponsorship from '../slices/Sponsorship';
import Agenda from '../slices/agenda/Index';

import ParticlesBackground from '@/components/ParticlesBackground';

const Main = () => {
  return (
    <main>
      <NavBar />
      <HeadSlice />
      <AboutUs />
      {config.SHOW_SPEAKERS && <Speakers speakersData={SPEAKERS} />}
      {config.SHOW_AGENDA && <Agenda />}
      <PreviousEdition />
      <Map />
      <Sponsorship />
      {config.SEND_MESSAGE_URL && (
        <Contact sendMessageUrl={config.SEND_MESSAGE_URL} />
      )}
      <ParticlesBackground />
    </main>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>18. Sesja Linuksowa</title>
        <meta name="description" content="18. Sesja Linuksowa" />
        <meta content="18. Sesja Linuksowa" property="og:site_name"></meta>
        <meta content="pl_PL" property="og:locale"></meta>
        <meta
          content="18. Sesja Linuksowa | Wrocław, Polska"
          property="og:title"
        ></meta>
        <meta content="http://sesja.linuksowa.pl/" property="og:url"></meta>
        <meta
          content="Sesja Linuksowa to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux."
          property="og:description"
        ></meta>
        <meta content="website" property="og:type"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="preload"
          as="font"
          href="/font/Montserrat-SemiBold.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          as="font"
          href="/font/Montserrat-Light.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          as="font"
          href="/font/Montserrat-Regular.ttf"
          crossOrigin="anonymous"
        ></link>
        <meta
          name="google-site-verification"
          content="_XX2o2FKgUfRENSsUKxtqytQmXUjiPSlIVqFgmlXdts"
        />
      </Head>
      <Main />
    </>
  );
}
