import { createBrowserRouter } from 'react-router';
import App from '../App.jsx';
import Home from '../components/Home.jsx';
import Services from '../components/Service/Services.jsx';
import Process from '../components/Pages/Process.jsx';

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/process",
        element: <Process/>,
      },     
    ]
  },
]);

export default AppRouter;