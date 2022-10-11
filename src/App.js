import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Blog/Blog';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import Topic from './components/Topic/Topic';
import logo from './logo.svg';
import Quiz from './Quiz/Quiz';

const createRoute = createBrowserRouter([
  { 
    path: '/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Topic></Topic>,
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
