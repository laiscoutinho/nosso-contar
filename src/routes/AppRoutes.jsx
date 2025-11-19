import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './listRoutes';

import PublicLayout from "../components/layout/PublicLayout/PublicLayout"

export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<PublicLayout routes={publicRoutes} />}>
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  )
}