import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { EducationPage } from "../pages/EducationPage"
import { ProyectsPage } from "../pages/ProyectsPage"

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
            },
            {
                path: '/education' ,
                element: <EducationPage />
            },
            {
                path: '/proyects',
                element: <ProyectsPage />
            
            },
            {
                path: '/contact',
                element: <div>Contact</div>
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