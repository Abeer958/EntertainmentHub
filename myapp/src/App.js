import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/mainNav/MainNav';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Container } from "@mui/material";
import Trending from './pages/trending/Trending'
import Movies from './pages/movies/Movies'
import Series from './pages/series/Series'
import Search from './pages/search/Search'

const Layout = () => {
  return (
    <>
      <Outlet />
      <SimpleBottomNavigation />
    </>
  )
}

const router = createBrowserRouter([
 
 {
    path: "/",
    element: <Layout />,
    children: [
      {
    path: "/",
    element: <Trending />,
  },
      {
    path: "/movies",
    element: <Movies />,
  },
       {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/search",
    element: <Search />,
  },
    ]
  }
]);

function App() {

  return (
    <>
      <Header />
    <div className="app">
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
    </>
  );
}

export default App;
