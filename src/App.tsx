import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const Layout = () => {
  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"product/:id",
        element:<ProductDetail/>
      }
    ]
  }
]);
function App() {

  //api
  //https://5fc9346b2af77700165ae514.mockapi.io/products

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
