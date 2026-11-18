import { createBrowserRouter, RouterProvider } from "react-router"
import { PortfolioLayout } from "../layouts/PortfolioLayout"
import { HomePage } from "../features/home/HomePage"
import { AboutPage } from "../features/about/AboutPage"
import { EducationPage } from "../features/education/EducationPage"
import { ProjectsPage } from "../features/projects/ProjectsPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <PortfolioLayout />,
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
                element: <ProjectsPage />
            
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