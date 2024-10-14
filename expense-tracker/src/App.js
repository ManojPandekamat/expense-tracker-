import "./App.css";

import ErrorPage from "./routes/err.jsx";
import About from "./screens/About/About.js";
import Apppage from "./screens/AppPage/Apppage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Total from "./screens/TemplatePage/Total.js";
import Total2 from "./screens/TemplatePage/Total2.js";
import Total3 from "./screens/TemplatePage/Total3.js";
import { DataProvider } from "./context.js";


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:(
        <div className="App">
        <Apppage/>
      </div>
      ),
      errorElement:<ErrorPage/>
        
    },

    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/money-spent",
      element: (
        <Total name="Money spent" />
      )
    },
    {
      path:"/recieved-expenses",
      element: (
        <Total2 name="Todays Expenses" />
      )
    },
    {
      path:"/pandl-expenses",
      element: (
        <Total3 name="P/L monthly" />
      )
    },
  ]
)



function App() {
  return (
    <div>
      <DataProvider>
    <RouterProvider router={router}/>
      </DataProvider>
    </div>

  );
}

export default App;
