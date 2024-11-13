import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/appLayout";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Link from "./pages/Link";
import RedirectLink from "./pages/RedirectLink";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
        {
            path: '/',
            element: <Landing/>
        },
        {
            path: '/auth',
            element: <Auth/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/link/:id',
            element: <Link/>
        },
        {
            path: '/:id',
            element: <RedirectLink/>
        },
    ] 
  }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
