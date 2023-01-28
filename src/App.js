import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import { Fragment, useEffect, useState } from "react";
import { Spinner, Button } from "react-bootstrap";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="centered">
          <Button variant="info" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            Loading...
          </Button>
        </div>
      ) : (
        <div className="background">
          <Header />
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
