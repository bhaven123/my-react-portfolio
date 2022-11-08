import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Work />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
