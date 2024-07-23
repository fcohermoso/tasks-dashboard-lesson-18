import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewTask from './pages/NewTask/NewTask';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/newTask',
          element: <NewTask />,
        },
      ]
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;