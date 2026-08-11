import { createBrowserRouter, RouterProvider, Navigate } from "react-router"
import { MaintenancePage } from "../pages/MaintenancePage"

const router = createBrowserRouter([
    {
        path: '*',
        element: <MaintenancePage />
    }
])


export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}