import React, { useState } from "react";
import globeLeft from "../assets/globe-left.png";
import globeRight from "../assets/globe-right.png";

const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"];
const vendors = ["GWE", "Grunfos", "Sumpas", "Vendor D", "Vendor E"];

const Partners = () => {
  const [activeTab, setActiveTab] = useState("clients");
  const isClients = activeTab === "clients";
  const items = isClients ? clients : vendors;

  return (
    <div className="partners-container">
     
      <div className="tabs">
        <button
          className={isClients ? "tab active" : "tab"}
          onClick={() => setActiveTab("clients")}
        >
          გამორჩეული კლიენტები
        </button>
        <button
          className={!isClients ? "tab active" : "tab"}
          onClick={() => setActiveTab("vendors")}
        >
          პარტნიორები
        </button>
      </div>

    
      <div className="main-area">
       
        {isClients && (
          <div className="arc-list-client">
          {items.map((item, i) => {
              const total = items.length;
              const angleStep = Math.PI / (total + 1);
              const angle = angleStep * (i + 1);
              const radius = 200;
              const x = radius * Math.sin(angle);
              const y = radius * Math.cos(angle);
              return (
                <div
                  key={item}
                  className="arc-item"
                  style={{
                    right: `calc(10% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}

       
        {!isClients && (
          <div className="arc-list-vendor">
            {items.map((item, i) => {
              const total = items.length;
              const angleStep = Math.PI / (total + 1);
              const angle = angleStep * (i + 1);
              const radius = 200;
              const x = radius * Math.sin(angle);
              const y = radius * Math.cos(angle);
              return (
                <div
                  key={item}
                  className="arc-item"
                  style={{
                    left: `calc(10% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}




        <div className={`globe-wrapper ${isClients ? "right" : "left"}`}>
          <div className="globe-mask">
            <img
              src={isClients ? globeLeft : globeRight}
              alt="Globe"
              className="globe-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
