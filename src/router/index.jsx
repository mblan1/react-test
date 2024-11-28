import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Test from '../pages/Test';

const Layout = () => {
    return <Outlet />;
};

export default createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/test',
                element: <Test />,
            },
        ],
    },
]);
