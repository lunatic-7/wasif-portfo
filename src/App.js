import React, {useState, useEffect} from 'react';

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Works from "./components/Works";


function App() {
  const [isLoading, setLoading] = useState(true);

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }
  
  return (
    <>
      <Home />
      <About />
      <Services />
      <Works />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
