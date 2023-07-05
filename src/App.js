
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './Components/VideoContainer';
import Watchpage from './Watchpage';
import MainContainer from './Components/MainContainer';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {path : "/",
    element:<MainContainer/>},
    {path : "/watch",
    element:<Watchpage/>},
  ]
}])

function App() {
  return (
    <div >
   <Provider store={store}>
   <Head/>
   <RouterProvider  router={appRouter}/>
   
   </Provider>
    </div>
  );
}

export default App;
