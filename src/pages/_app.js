import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import React from 'react'

const MyApp = ({Component, pageProps } ) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp