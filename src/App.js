import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home/Home';

const createRoute = createBrowserRouter([
  { 
    path: '/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path: '/home',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path:'/topic',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topic></Topic>,
      },
      {path:'/statistics',element:<Statistics></Statistics>},
      {path:'/blog',element:<Blog></Blog>},
      {
        path:'/topic/quiz/:quizID',
        loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
        element:<Quiz></Quiz>
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={createRoute}>

    </RouterProvider>
  );
}

export default App;
