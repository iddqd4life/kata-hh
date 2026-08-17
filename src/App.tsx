import ThemeProvider from './providers/ThemeProvider';
import Vacancies from './pages/Vacancies/Vacancies.tsx';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout.tsx';
import Vacancy from './pages/Vacancy/Vacancy.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import About from './pages/About/About.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, loader: () => redirect('/vacancies') },
      { path: 'vacancies', Component: Vacancies },
      { path: 'vacancies/:cityByRoute', Component: Vacancies },
      { path: 'vacancies/:id', Component: Vacancy },
      { path: 'about', Component: About },
    ],
  },
]);

const App = () => (
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
