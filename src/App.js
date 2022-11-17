import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Work from "./pages/Work";
import { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="centered">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <Work />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </Fragment>
  );
};

export default App;
