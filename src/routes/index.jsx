import Layout from "../Layout";
import Home from "../views/Home";
import About from "../views/About";
import Event from "../views/Event";
import People from "../views/People";
import Person from "../views/people/Person";
import Products from "../views/Products";
import Product from "../views/Products/Product";
import NotFound from "../views/NotFound";

// 路由分段撰寫
const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'event',
                element: <Event />
            },
            {
                path: 'people',
                element: <People />,
                children: [
                    {
                        //動態路由
                        path: ':id',
                        element: <Person />
                    }
                ]
            },
            {
                path: 'products',
                element: <Products />,
                // children: [
                //     {
                //         //動態路由
                //         path: ':id',
                //         element: <Product />
                //     }
                // ]
            },
            {
                path: 'product/:id',
                element: <Product />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]

export default routes