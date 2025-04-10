import React from "react";

function ApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here or send it to a backend
    alert("Form submitted successfully!");
    e.target.reset(); // Reset the form after submission
  };
  return (
    <div>
      {/* Form Section */}
      <div className="mt-8 mb-8 flex flex-col items-center justify-center">
        <form className="space-y-2 mx-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Full Name *
              </label>
              <input
                type="text"
                name="Full Name"
                placeholder=""
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
          {/* dob */}
          <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dob"
                placeholder=""
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
          {/* current address */}
          <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Current Address *
              </label>
              <input
                type="text"
                name="address"
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
              {/* telephone */}
            <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Telephone Number *
              </label>
              <input
                type="tel"
                name="telephone"
                pattern="[0-9+()\- ]{7,}"
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
              {/* Email address */}
              <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
             {/* country */}
             <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Country *
              </label>
              <input
                type="text"
                name="country"
                placeholder=""
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
             {/* driver license */}
             <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
              Passport/Drivers Licence Number  *
              </label>
              <input
                type="text"
                name="idNumber"
                placeholder=""
                className=" w-full px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
             {/* comments */}
             <div className="flex flex-col w-full">
            <div className="">
              <label className="inline mr-2 text-sm font-medium text-gray-700 mb-0.5">
                Comments *
              </label>
              <textarea
              name="comments"
              rows="3"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all resize-none"
            ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-textBlue text-white py-2.5 rounded-2xl hover:bg-blue transition-all font-medium mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;