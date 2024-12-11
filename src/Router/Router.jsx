import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {}
        ]
    }
])

export default Router