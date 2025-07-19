import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
            
        ],
        errorElement: <div>Err</div>
    },
    {
        path: '*',
        element: <div>404</div>
    }
])


export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}