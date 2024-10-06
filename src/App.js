import { Button } from "@nextui-org/react";
import Navbar from "./Layouts/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/home";
import Dashboard_layout from "./Layouts/dashboards";
import Overview from "./Components/Overview/overview";
import Detections from "./Components/Pages/detections/detections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/*" element={<Navbar />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path="/dashboard/*" element={<Dashboard_layout />}>
          <Route index element={<Overview />} />
          <Route path="detections" element={<Detections />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
