import { createBrowserRouter } from "react-router-dom";
import { Cart } from "pages/cart";
import { Home } from "pages/home/home";
import { Layout } from "widgets/layout";
import { Admin } from "pages/admin";

const appRouter = createBrowserRouter([
  {element: <Layout/>, children: [
    {path: '/', element: <Home/>},
    {path: '/cart', element: <Cart/>},
    {path: '/admin', element: <Admin/>}
  ]}
])

export { appRouter }