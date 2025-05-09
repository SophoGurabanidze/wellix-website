import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className=" mt-5 w-full max-w-5xl mx-auto">
      {data.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 shadow-md rounded-2xl mb-4 overflow-hidden w-full"
        >
        
          <button
            onClick={() => handleSelect(item.id)}
            className="w-full flex justify-between items-center px-6 py-5 
                      bg-gradient-to-r from-cyan-500 to-cyan-600 
                      hover:from-cyan-500 hover:to-cyan-700 
                      text-white font-semibold text-lg 
                      rounded-t-2xl transition-all duration-300"
          >
             <span className="w-full text-center">{item.title}</span>
            <span className="text-2xl">{selected === item.id ? "−" : "+"}</span>
          </button>
    





         
          <div
            className={`transition-max-height duration-500 ease-in-out ${
              selected === item.id ? "max-h-[1000px] p-6 bg-blue-50" : "max-h-0 "
            }`}
          >
            <p className="text-gray-800 whitespace-pre-line">
              {item.content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
