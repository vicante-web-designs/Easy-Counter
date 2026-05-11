import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import CounterPage from './pages/counter/CounterPage.tsx';
import AdminPage from './pages/admin/AdminPage.tsx';
import NotFoundPage from './pages/404/NotFoundPage.tsx';
import CreateSectionPage from './pages/admin/forms/CreateSection.tsx';
import CreateServicePage from './pages/admin/forms/createService.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/counterPage',
    element: <CounterPage />
  },
  {
    path: '/adminPage',
    element: <AdminPage />
  },
  {
    path: '/createSection',
    element: <CreateSectionPage />,
  },
  {
    path: '/createService',
    element: <CreateServicePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
