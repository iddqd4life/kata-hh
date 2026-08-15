import ThemeProvider from './providers/ThemeProvider';
import Vacancies from './pages/Vacancies/Vacancies.tsx';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout.tsx';
import Vacancy from './pages/Vacancy/Vacancy.tsx';
import NotFound from './pages/NotFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, loader: () => redirect('/vacancies') },
      { path: 'vacancies', Component: Vacancies },
      { path: 'vacancies/:id', Component: Vacancy },
      { path: '*', Component: NotFound },
    ],
  },
]);

const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
