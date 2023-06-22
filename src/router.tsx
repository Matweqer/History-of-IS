import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { BioPage } from './pages/BioPage/BioPage';
import { CtfPage } from './pages/CtfPage/CtfPage';
import { GenesisPage } from './pages/GenesisPage/GenesisPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:"/origin",
        element: <BioPage />,
    },
    {
        path:'/ctf',
        element: <CtfPage />
    },
    {
        path:'/is-conference',
    },
    {
        path:'/perspective-conference',
        element: <GenesisPage />
    },
    {
        path:'/science',
    },
    {
        path:'/directions',
    }
]);
