import React from "react";
import CheckList from "../components/CheckList";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

function Service() {
  return (
    <div className="font-mont px-4 md:px-8">
      <h1 className="font-bold text-center mt-6 md:text-4xl text-2xl">
        Our Services
      </h1>

      {/* Section Container */}
      <div className="flex flex-col mt-6 gap-8 lg:flex-row lg:items-start">
        {/* Left Column */}
        <div className="flex flex-col w-full space-y-6">
          {/* Standard Delivery */}
          <section>
            <h2 className="font-bold text-blue text-xl md:text-2xl">
              Standard Delivery
            </h2>
            <p className="text-sm text-black pt-2">
              With standard delivery you receive your parcel within 3-5 days.
              Shipment is done via Parcelforce Worldwide, a leading provider of
              collection and delivery services for urgent packages throughout
              the world. Delivery charge is calculated according to the weight
              of the products. For the standard delivery of all Major Home
              Appliances you should receive your goods within 5 days.
            </p>
          </section>

          {/* Image Cards */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-6">
            {/* Express Delivery */}
            <div className="flex-1">
              <img
                src={assets.slide1}
                alt="Express Delivery"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="font-semibold text-blue mt-4 text-xl md:text-2xl">
                Express Delivery
              </h2>
              <p className="text-sm text-black pt-2">
                With Express Delivery, place your order before 12 a.m. and
                receive the delivery within 24-48 hours. Orders placed before 10
                a.m. will be dispatched the following day. Shipment is done
                expressly, the global market leader of the international air
                express industry. Delivery charge is calculated according to the
                weight of your products and urgency of delivery. Please note
                that since we do not deliver on weekends, if your order is
                placed on a friday, it will be delivered to you on the following
                Monday provided that your product is in stock at our warehouse
              </p>
            </div>

            {/* Professional Services */}
            <div className="flex-1">
              <img
                src={assets.slid2}
                alt="Professional Services"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="font-semibold text-blue mt-4 text-xl md:text-2xl">
                Professional Services
              </h2>
              <p className="text-sm text-black pt-2">
                We provide a complete array of supply chain management solutions
                involving air freight, ocean freight, trucking, warehousing and
                distribution. Your competition is vying for every dollar to sell
                their products in this fiercely competitive market. Don't miss
                out because your freight costs are too high! Talk to us and we
                will work the most competitive routing means of transportation,
                be it air, ocean, truck or even warehousing with just in time
                deliveries
              </p>
            </div>
          </div>

          {/* Security Solutions */}
          <section>
            <h2 className="font-semibold text-blue mt-6 text-xl md:text-2xl">
              Security Solutions
            </h2>
            <p className="text-sm text-black pt-2">
              To meet the global growth expectations of our clients, Royco
              Delivery Express Shipping Company offers security solutions that
              fit the specific needs of international organizations. Royco
              Delivery Express can bring substantial benefits to your
              international organization by offering:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-black">
              <li>
                Consolidation of suppliers to optimize your internal resources
              </li>
              <li>Reduction of costs through the use of a single supplier</li>
              <li>Improved service levels through a single point of contact</li>
              <li>Improved visibility of your supply chain</li>
              <li>
                Full compliance with laws and regulations within all markets
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full gap-6">
          <CheckList />

          {/* Intelligent Security */}
          <section>
            <h2 className="font-semibold text-blue text-xl md:text-2xl">
              Intelligent Security
            </h2>
            <p className="text-sm text-black pt-2">
              Security is our core business and we are uniquely positioned to
              offer customized security services to meet the specific needs of
              any organization. Among the services offered by Royco Delivery
              Express are guarding services, patrols and inspections, access
              control, concierge and receptionist services, security console
              operators, alarm response, and specialized client requested
              services.
            </p>
          </section>

          {/* Cargo Insurance */}
          <section>
            <h2 className="font-semibold text-blue text-xl md:text-2xl">
              Cargo Insurance
            </h2>
            <p className="text-sm text-black pt-2">
              Carriers are not liable for loss or damage of your cargo caused by
              natural disasters and other external circumstances. Generally,
              Carriers offer a limited liability which may not cover the cost of
              your shipment. As an added protection we offer cargo insurance at
              competitive rates..all risk or total loss.
            </p>
          </section>

          {/* Small Parcel Delivery */}
          <section>
            <h2 className="font-semibold text-blue text-xl md:text-2xl">
              Small Parcel Delivery
            </h2>
            <p className="text-sm text-black pt-2">
              We offer a small parcel service from the UK, USA, Germany and
              worldwide – a door-to-door service with an all-in price excluding
              Duty/Vat, finance charges and insurance if required. Only
              non-hazardous cargo between 0 and 30kg's qualify. For more
              information on this service please contact us.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Service;
