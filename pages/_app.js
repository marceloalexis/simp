import App from 'next/app'
import dynamic from 'next/dynamic'
import { MainProvider } from '../contexts/Main.context.js'
import BHeader from '../bemit/08-blocks/b-header/b-header.js'
import BMenu from '../bemit/08-blocks/b-menu/b-menu.js'
import BCookies from '../bemit/08-blocks/b-cookies/b-cookies.js'
import {AnimatePresence} from 'framer-motion'
import { gsap } from "gsap"
import { ScrollTrigger } from '../node_modules/gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

import 'normalize.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import '../bemit/bemit.scss'

function MyApp({ Component, pageProps, router }) {
  return (
     <MainProvider globalData={pageProps.globalData}>
      <BMenu />
      <BHeader  />
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.asPath}/>
      </AnimatePresence>
      <BCookies />
      </MainProvider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const resGlobalData = await fetch(`${process.env.REST_API}/wp-json/acf/v3/options/options/`);
  let globalData = await resGlobalData.json()
  globalData = globalData.acf

  appProps.pageProps = {
     globalData
  }

  return { ...appProps }
}

export default MyApp