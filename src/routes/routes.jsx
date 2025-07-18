import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            
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