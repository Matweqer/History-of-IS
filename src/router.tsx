import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path:'/origin',
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