import ThemeProvider from './providers/ThemeProvider';
import Vacancies from './pages/Vacancies/Vacancies.tsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.tsx';
import Vacancy from './pages/Vacancy/Vacancy.tsx';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={'vacancies'} replace />} />
          <Route path={'vacancies'} element={<Vacancies />} />
          <Route path={'vacancies/:id'} element={<Vacancy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
