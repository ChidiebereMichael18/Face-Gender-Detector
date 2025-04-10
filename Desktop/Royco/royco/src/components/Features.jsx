import { Clock, Lock, Mic, Speaker, Unlock, User } from "lucide-react";
import React from "react";

function Features() {
  return (
    <div>
      <div className="flex md:flex-row space-x-8 flex-col font-mont space-y-8 mx-4 md:mx-15 lg:mx-20 mt-12 items-center justify-center ">
        <div className="flex">
          <div>
            <Lock size={80} color={"#002757"} className="mr-2" />
          </div>
          <div>
            <h2 className="font-semibold text-blue font-mont  md:text-2xl text-xl">
              Air
            </h2>
            <p>
              Allied World Delivery offers international air freight services
              from all worldwide destinations for all your export and import
              needs.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Mic size={80} color={"#002757"} className="mr-2" />
          </div>
          <div>
            <h2 className="font-semibold text-blue font-mont md:text-2xl text-xl">
              Land
            </h2>
            <p>
              We offer daily services for all your cross border trucking need.
              Having access to trucks returning from all major gateways.
            </p>
          </div>
        </div>
      </div>
      {/* second flex */}
      <div className="flex md:flex-row space-x-8 flex-col font-mont space-y-8 mx-4 md:mx-15 lg:mx-20 mt-12 items-center justify-center ">
        <div className="flex">
          <div>
            <User size={80} color={"#002757"} className="mr-2" />
          </div>
          <div>
            <h2 className="font-semibold text-blue font-mont md:text-2xl text-xl">
              Ocean
            </h2>
            <p>
              Weekly sailings to most major ports of call - LCL, FCL, RO-RO
              (Cars), Breakbulk.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <Clock size={80} color={"#002757"} className="mr-2" />
          </div>
          <div>
            <h2 className="font-semibold text-blue font-mont md:text-2xl text-xl">
              24/7 Support
            </h2>
            <p>
              you can contact us for support any time, and we will be to help
              you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
