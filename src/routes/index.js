import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const WorkPage = lazy(() => import('../pages/WorkPage'));
const ExperiencePage = lazy(() => import('../pages/ExperiencePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/" element={<ExperiencePage />} />
        <Route path="/" element={<WorkPage />} />
        <Route path="/" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage status={404} message="Page not found." />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}
