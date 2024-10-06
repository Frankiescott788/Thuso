import { Button } from "@nextui-org/react";
import Navbar from "./Layouts/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/home";
import Dashboard_layout from "./Layouts/dashboards";
import Overview from "./Components/Overview/overview";
import Detections from "./Components/Pages/detections/detections";
import LeafletMapComponent from "./map/map";
import Users from "./Components/Pages/users/users";
import Signin from "./Components/Pages/auth/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}/>
        <Route path="/landing" element={<Navbar />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path="/dashboard/*" element={<Dashboard_layout />}>
          <Route index element={<Overview />} />
          <Route path="detections" element={<Detections />}/>
          <Route path="map" element={<LeafletMapComponent />}/>
          <Route path="users" element={<Users />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
