import logo from './logo.svg';
import './App.css';
import task from './component/task';
import Admin from './component/task';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskOverview from './component/overview';
import View from './component/View';
import Collaborate from './component/collaborate';



const router = createBrowserRouter([
  { path: "/", element: <Admin />, children: [{ path: '/TaskOverview', element: <TaskOverview /> },{path:'/View', element:<View/>},{path:'/Collaborate',element:<Collaborate/>}]}
])
function App() {
  return (
    <>
      <RouterProvider router={router} />



    </>

  );
}

export default App;
