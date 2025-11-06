
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact';
import { AppLayout } from './components/Layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },] // component to be rendered when path matches
    },
  ]
);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Hello React app
      </h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
