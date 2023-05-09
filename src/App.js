import "./App.css";
import NavBar from "./Layouts/Header/NavBar";
import TopBar from "./Layouts/Header/TopBar";
import Footer from "./Layouts/Footer/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Training from "./Pages/Training";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
