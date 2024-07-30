import React from "react";
import { Navbar } from './components';
import { About, Blog, CaseStudies, Contact, Header, Industries, Services } from "./containers";
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      <Blog />
      <Contact /> 
    </div>
  );
}

export default App;
