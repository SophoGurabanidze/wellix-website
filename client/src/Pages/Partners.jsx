import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import globeLeft from "../assets/globe-left.png";
import globeRight from "../assets/globe-right.png";

import vendor1 from "../assets/partnerLogos/Vendor1.png";
import vendor2 from "../assets/partnerLogos/Vendor2.png";
import vendor3 from "../assets/partnerLogos/Vendor3.png";
import vendor4 from "../assets/partnerLogos/Vendor4.png";
import vendor5 from "../assets/partnerLogos/Vendor5.png";

import client1 from "../assets/partnerLogos/client1.png";
import client2 from "../assets/partnerLogos/client2.jpeg";
import client3 from "../assets/partnerLogos/client3.png";
import client4 from "../assets/partnerLogos/client4.jpeg";
import client5 from "../assets/partnerLogos/client5.png";

const clients = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
];

const vendors = [
  { name: "Vendor 1", logo: vendor1 },
  { name: "Vendor 2", logo: vendor2 },
  { name: "Vendor 3", logo: vendor3 },
  { name: "Vendor 4", logo: vendor4 },
  { name: "Vendor 5", logo: vendor5 },
];

const Partners = () => {
  const [activeTab, setActiveTab] = useState("clients");
  const isClients = activeTab === "clients";
  const items = isClients ? clients : vendors;
  const { t } = useTranslation();

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("clients")}
          className={`px-4 py-2 rounded-md text-sm md:text-base transition ${
            isClients ? "bg-primaryBlue text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {t("partners.clients")}
        </button>
        <button
          onClick={() => setActiveTab("vendors")}
          className={`px-4 py-2 rounded-md text-sm md:text-base transition ${
            !isClients ? "bg-primaryBlue text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {t("partners.vendors")}
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 relative">
        {/* Globe Image */}
        <div  className={`max-w-[300px] md:max-w-[400px] ${
    isClients ? "md:mr-[317px]" : "md:ml-[280px]"
  }`}>
          <img
            src={isClients ? globeLeft : globeRight}
            alt="Globe"
            className="w-full object-contain"
          />
        </div>

        {/* Partner/Client Items */}
        <div className= {`md:right-0 md:bottom-0 w-full md:absolute   ${
    isClients ? "md:top-[26px] md:left-[-66px]" : "md:top-[26px] md:left-[30px]"
  }`}>
          {/* Desktop: arc layout */}
          <div   className={`hidden md:block relative w-full h-[400px]   ${
    isClients ? "md:right-1/2" : "md:left-1/2"
  }`}>
            {items.map((item, i) => {
              const total = items.length;
              const angleStep = Math.PI / (total + 1);
              const angle = angleStep * (i + 1);
              const radius = 200;
              const x = radius * Math.sin(angle);
              const y = radius * Math.cos(angle);

              const style = isClients
                ? { right: `calc(10% + ${x}px)`, top: `calc(50% + ${y}px)` }
                : { left: `calc(10% + ${x}px)`, top: `calc(50% + ${y}px)` };

              return (
                <div
                  key={item.name}
                  className="absolute flex flex-col items-center"
                  style={style}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-[5.5rem] h-[4.5rem] object-contain mb-1 rounded"
                  />
                 
                </div>
              );
            })}
          </div>

          {/* Mobile: stacked cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 md:hidden">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center bg-gray-100 rounded-lg p-3 shadow-sm"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-[5.5rem] h-[4.5rem] object-contain mb-1 rounded"
                />
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
