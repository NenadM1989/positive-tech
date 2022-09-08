import React from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Home-Positive tech</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}
