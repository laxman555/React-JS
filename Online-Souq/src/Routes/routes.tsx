// import Home from './Home';
// import AboutUs from './AboutUs';
// import Skills from './Skills';
// import ContactUs from './ContactUs';
// import Projects from './Projects';
// import ProjectsDetail from './ProjectsDetail';
// import PageNotFound from './PageNotFound';
// import ServerSkills from './Skills/ServerSkills';
// import ClientSkills from './Skills/ClientSkills';
// import { ErrorBoundary } from './ErrorBoundary';
// import Layout from './Layout';
// import { Children } from 'react';
// import Login from './Login';
import Products from "../Componets/Products/Products";
import ProductDetails from "../Componets/Product-Details/Product-Details";
import Layout from "../Componets/Layout/Layout";
import PageNotFound from "../Componets/PageNotFound/PageNotFound";

export const routes = [
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "productdetails",
        element: <ProductDetails />,
      },
    
      {
        path: "*",
        element: <PageNotFound />,
      } 
    ]
  }
]

