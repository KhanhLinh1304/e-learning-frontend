import PrivateRouter from "../components/PrivateRouter";
import LayoutDefault from "../layout/LayoutDefault";
import About from "../pages/About";
import CoursePage from "../pages/Course";
import CreateCourse from "../pages/CreateCourse";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import Personal from "../pages/Personal";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "course",
                element: <CoursePage/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "*",
                element: <Error404/>
            },
            {
                path: "createCourse",
                element: <CreateCourse/>
            },
            {
                element: <PrivateRouter/>,
                children: [
                    {
                        path: "personal",
                        element: <Personal/>
                    },
                ]
            },
            
            
        ]
    }
];