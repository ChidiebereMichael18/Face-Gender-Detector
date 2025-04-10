import React from "react";
import slide1 from "../assets/slide_1.jpg";
import { CircleFadingPlus } from "lucide-react";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-100 w-full"
      >
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="text-4xl mt-30 font-bold text-center text-white">
            WELCOME TO ROYCO DELIVERY EXPRESS
          </h1>
        </div>
      </div>
      <div className="mt-10 font-mont flex flex-col items-center lg:mx-20 md:mx-20 mx-4 justify-center">
        <h1 className="text-2xl text-center font-bold text-blue">
          What is Royco Delivery Express
        </h1>
        <p className="mt-4 text-center ">
          Royco Delivery Express . Is a licensed Customs Broker, Freight and
          Logistics provider. We provide a complete array of supply chain
          management solutions involving air freight, ocean freight, trucking,
          warehousing and distribution. Is committed to excellence in service
          and maintains high levels of adaptability to the necessities of our
          customers, regulatory implementation and technology to the highly ever
          changing world market. We adhere to high quality standards in order to
          realize and increase operational and economic efficiencies to our
          customers. This philosophy is shared by our carefully selected
          worldwide partners in the logistics industry. With some years of
          collective experience in freight, and logistics, Royco Delivery
          Express and its team of knowledgeable consultants can help you make
          the right decision on how to move your freight. We offer advice on the
          best possible means to make your product viable for domestic or
          international markets.
        </p>
      </div>
      <Features />
      <div className="mt-18 lg:mx-20 md:mx-15 mx-4 ">
        <h2 className="font-semibold  text-blue mt-6 md:text-2xl text-xl font-mont">
          One Half
        </h2>
        <p className="text-base mt-4 text-black pt-2 text-left  font-mont ">
          Royco Delivery Express delivers freight forwarding by air, sea, road
          and rail; warehousing solutions from packaging, to repairs, to
          storage; mail deliveries worldwide; and other customized logistic
          services – with everything Diplomatic does, Freight transportation,
          warehousing and distribution, supply chain solutions - we cover it
          all. That's why we are the world's largest logistics company. We are
          the world's largest logistics company, with a global network of over
          1,000 locations in over 100 countries.     
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
