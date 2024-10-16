import logo from "./logo.svg";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import Demo from "./Demo";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";
import EditPhoto from "./EditPhoto";
import Demo5 from "./Demo5";
import EditTitle from "./EditTitle";
import RegisterForm from "./Auth/RegisterForm";
import Login from "./Auth/Login";
import Home from "./Home";

function App() {
  // const name = "Kaushal";

  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      path: "edit-title",
      element: <EditTitle />,
    },
    {
      path: "register",
      element: <RegisterForm />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  // const handleNameChange = () => {
  //   const name = ["Kaushal", "Anjali", "Khushal"];
  //   const int = Math.floor(Math.random() * 3);
  //   return name[int];
  // };
  // const data = {
  //   name: "React",
  //   description: "This is React",
  // };
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Demo data={data} />
      <Demo2 />
      <Demo3 /> */}
      {/* <Demo4 /> */}
    </div>
  );
}

export default App;
