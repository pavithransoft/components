import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white text-black h-screen w-2/3 m-auto py-20">
      <div className="h-full bg-slate-100 border rounded-lg shadow-lg shadow-slate-300">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
