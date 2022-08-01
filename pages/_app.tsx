import {AppProps} from 'next/app'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import '../components/Card/Card.css'
import '../components/SellCard/SellCard.css'
import '../components/ProductCard/ProductCard.css'
import '../components/AddToCart/AddToCart.css'
import '../components/ProductAttributes/ProductAttributes.css'
import '../global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp