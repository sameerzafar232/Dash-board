import {
  createBrowserRouter,
  Router,
  Route,
  Routes,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Inventory from "./components/Inventory";
import Orders from "./components/Orders";
import Conversation from "./components/Conversation";
import Setting from "./components/Setting";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Customers" element={<Customers />} />
      <Route path="/Inventory" element={<Inventory />} />
      <Route path="/Conversation" element={<Conversation />} />
      <Route path="/Setting" element={<Setting />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
