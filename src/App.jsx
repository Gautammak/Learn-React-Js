import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/spa-basic/Layout";
import Home from "./components/spa-basic/pages/Home";
import About from "./components/spa-basic/pages/About";
import Dashboard from "./components/spa-basic/pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}