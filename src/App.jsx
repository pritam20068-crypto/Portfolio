import React, { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));


const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<div className="loading">Loading...</div>}>
          <About />
         
          
          <Resume />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;