import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer"

import { Outlet } from "react-router-dom";

export default function PublicLayout({ routes }) {

  const headerRoutes = routes.filter(route => route.title);

  return (
    <div className="min-h-screen flex flex-col">
      <Header routes={headerRoutes} />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}