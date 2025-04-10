import React from "react";
import CheckList from "../components/CheckList";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
function About() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center mt-6 md:text-4xl text-2xl font-mont">
          About Us
        </h1>
      </div>
      <div className="flex flex-col mt-6 md:flex-row space-x-12 justify-between mx-4 md:mx-10 lg:mx-10">
        {/* first paragraph */}
        <div className="flex flex-col w-full ">
          <div>
            <h2 className="font-bold text-blue  md:text-2xl text-xl font-mont">
              About Royco Delivery Express
            </h2>
            <img src= {assets.about} alt="" className="w-full mt-4 h-50 object-cover" />
            <p className="text-sm text-black mt-6  font-mont">
              Royco Delivery Express is a global logistics company that provides
              and maintain the prime objective of service excellence within the
              logistics industry. Intrinsic to the management of Royco Delivery
              Express is a determination to align the service of the company
              with the demands of our customers, all requiring a world-class
              freight forwarder, capable of enhancing and adding value through
              the complete supply chain.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-blue mt-6 md:text-2xl text-xl font-mont">
              Our Vision
            </h2>
            <p className="text-sm text-black pt-2 font-mont">
              To be the leading logistics company, providing innovative and
              efficient solutions that exceed customer expectations. To remain a
              market leader within the logistics industry, maintaining world
              class standards, adding value to the products of our customers.
              Keeping ahead of the ever-changing dynamics of the industry, Royco
              Delivery Express has emerged as a market leader, with high
              priority being placed globally on direct solutions for our
              customers. <br /> <br /> Access to operations, administration and communication
              is afforded via a worldwide network of branch offices and
              like-minded partners capable of maintaining our commitment to
              service excellence. Our strategy of partnering with industry
              leading service providers globally has ensured that Royco Delivery
              Express firmly entrenches the quality of service the company
              offers internationally.
            </p>
          </div>
        </div>
        {/* second paragraph */}
        <div className="flex flex-col w-full mt-6  ">
          <CheckList />
          <div className="mt-4">
            <h2 className="font-semibold  text-blue mt-6 md:text-2xl text-xl font-mont">
              Our Mission
            </h2>
            <p className="text-sm text-black pt-2  font-mont">
              To provide our customers with the highest quality of service in
              the logistics industry, ensuring that their needs are met with
              professionalism and efficiency. We strive to build long-lasting
              relationships with our customers by providing them with the best
              possible solutions for their logistics needs.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold  text-blue mt-4 md:text-2xl text-xl font-mont">
              Who We Are
            </h2>
            <p className="text-sm text-black pt-4 font-mont">
              Royco Delivery Express is a global logistics company that provides
              and maintains the prime objective of service excellence within the
              logistics industry. Intrinsic to the management of Royco Delivery
              Express is a determination to align the service of the company
              with the demands of our customers, all requiring a world-class
              freight forwarder, capable of enhancing and adding value through
              the complete supply chain. <br /> Our experienced staff of trained
              professionals is dedicated to making every security, system
              integration, delivery of important consignments and goods, we
              provide informative and positive buying experience. We understand
              the importance of being comfortable with your security system and
              confident in your decision. Therefore, we work with you to custom
              design the right system for your specific needs.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
