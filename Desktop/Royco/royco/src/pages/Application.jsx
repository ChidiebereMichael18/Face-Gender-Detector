import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";

function Application() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center mt-6 md:text-4xl text-2xl font-mont">
          Application Form
        </h1>
      </div>
      <ApplicationForm/>
      <Footer/>
    </div>
  );
}

export default Application;
