import React from "react";
import CheckList from "../components/CheckList";
import Footer from "../components/Footer";

function Tracking() {
  return (
    <div>
      <div className="min-h-screen">
        <div>
          <h1 className="font-bold text-center mt-6 md:text-4xl text-2xl font-mont">
            Tracking
          </h1>
        </div>
        <div className="flex flex-col mt-4 md:flex-row space-x-16  mx-4 md:mx-10 lg:mx-10">
          <div className="mb-16">
            {/* <h2 className="font-bold text-blue  md:text-2xl text-xl font-mont">
              Track Your Shipment
            </h2> */}
            <h1 className="text-xl text-black mt-4  font-mont">
              Enter your tracking number below to know your package progress!.
            </h1>
            <div>
              <label className="block text-lg font-medium text-gray-700 mt-4 ">
                Tracking Number
              </label>
              <input type="text"
                placeholder=""
                className=" w-50 px-3 py-1 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue focus:border-blue transition-all mt-2" />
            </div>
            <button className="ml-14 py-2 px-4 bg-blue mt-10 rounded-2xl text-white font-bold">Track my percel</button>
          </div>
          <CheckList />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Tracking;
