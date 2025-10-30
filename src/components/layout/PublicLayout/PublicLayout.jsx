import React from 'react';

import Header from "../Header/Header";

import { Outlet } from "react-router-dom";

export default function PublicLayout({ routes }) {

  return (
    <div className="min-h-screen flex flex-col">
      <Header routes={routes} />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}