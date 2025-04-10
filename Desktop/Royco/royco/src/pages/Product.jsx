import React from "react";
import CheckList from "../components/CheckList";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
function Product() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center mt-6 md:text-4xl text-2xl font-mont">
          Our Products
        </h1>
      </div>
      <div className="flex flex-col mt-6 md:flex-row space-x-12 justify-between mx-4 md:mx-10 lg:mx-10">
        {/* first paragraph */}
        <div className="flex flex-col w-full ">
          <div>
            <h2 className="font-bold text-blue  md:text-2xl text-xl font-mont">
              At Your Advantage
            </h2>
            <div>
              <img src= {assets.delivery} alt="" className="mt-6" />
            </div>
            <p className="text-sm text-black pt-4 font-mont">
              After a thorough and detailed research and consultations with both
              International and local partners in combating crime, Royco
              Delivery Express provides tailor made Security Solutions developed
              with the client for the client. Our Security Solutions are
              designed for Optimum Effect First time. Dedicated to developing
              and implementing specialized security guard programs for each of
              its clients, Royco Delivery Express provides superior service in a
              cost-efficient manner. Its commitment to professional quality
              security services is unmatched. With its exceptional security
              personnel, Allied World Delivery sets the industry standard for
              excellence. Allied World Delivery assignment solutions are
              tailor-made to the specific requirements of the client. Your
              Security Solution will be implemented, monitored and controlled by
              our experienced, professional management team to your exact
              requirements. Our consignment/good delivery is first class and it
              has earn the trust and confidence of our customer. Just call on
              us, we shall deliver to you anywhere. Your smiles is our happiness
            </p>
          </div>
        </div>
        {/* second paragraph */}
        <div className="flex flex-col w-full mt-6  ">
          <CheckList />
          <div className="mt-4">
            <h2 className="font-semibold  text-blue mt-6 md:text-2xl text-xl font-mont">
              Testimonials
            </h2>
            <p className="text-sm text-black pt-2  font-mont">
              We have been dealing with Royco Delivery Express for several
              months now on a couple of import shipments. I can say that their
              services have been very reliable and the communication has been
              excellent. On the whole, they are much better at providing service
              than many of our other larger agents in the Middle East and Asian
              countries. In short, I would highly recommend them. Royco Delivery
              Express is a reliable source of transportation with an emphasis on
              customer service. Their follow through and means of keeping me
              notified every step of the way is outstanding! I highly recommend
              them for your transportation needs.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold  text-blue mt-4 md:text-2xl text-xl font-mont">
              Integrity
            </h2>
            <p className="text-sm text-black pt-4 font-mont">
              Royco Delivery Express employee is honest and therefore trusted to
              work unsupervised in the customer's premises and with valuables.
              Royco Delivery Express never compromises in its demand for
              integrity. Integrity also includes openly expressing one's
              opinion, reporting and not withholding information
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
