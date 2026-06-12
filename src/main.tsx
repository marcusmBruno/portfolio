import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import "@fontsource-variable/inter";
import "@fontsource/calistoga";
import { HomePage } from './pages/HomePage.tsx'
import { ProjectsPage } from './pages/ProjectsPage.tsx'
import { AboutMePage } from './pages/AboutMePage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} >
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about-me" element={<AboutMePage />} />
      </Route>

    </Routes>
  </BrowserRouter >,
)
