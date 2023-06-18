import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {BioPage} from './pages/BioPage/BioPage.tsx';

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
    },
    {
        path:'/is-conference',
    },
    {
        path:'/perspective-conference',
    },
    {
        path:'/science',
    },
    {
        path:'/directions',
    }
]);