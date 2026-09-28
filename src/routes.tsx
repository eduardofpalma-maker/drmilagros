import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação assíncrona/lazy (acelera a navegação inicial)
const HomePage = lazy(() => import('./pages/index'));
const EsteticaPage = lazy(() => import('./pages/estetica-avancada'));
const MetodoPage = lazy(() => import('./pages/metodo'));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/estetica-avancada" element={<EsteticaPage />} />
          <Route path="/metodo" element={<MetodoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
