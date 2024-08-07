import React from "react";
import { Navbar } from './components';
import { About, Blog, CaseStudies, Contact, Header, Industries, Services, Footer} from "./containers";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header /> <br />
      <About />
      <Services />
      <Industries />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
