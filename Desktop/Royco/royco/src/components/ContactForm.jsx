import React from "react";

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here or send it to a backend
    alert("Form submitted successfully!");
    e.target.reset(); // Reset the form after submission
  };
  return (
    <div>
      {/* Form Section */}
      <div className="mt-8 mb-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col w-full">
            <div className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="Full Name"
                placeholder="Enter your Full name"
                className="md:w-80 lg:w-100 sm:w-full w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all"
                required
              />
            </div>
          </div>
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="md:w-80 lg:w-100 sm:w-full w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
         
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder=""
              className="md:w-80 lg:w-100 sm:w-full w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

           {/* Email Field */}
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="comments"
              rows="3"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue focus:border-blue transition-all resize-none"
            ></textarea>
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

export default ContactForm;
