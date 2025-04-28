import React from "react";
import image1 from "../assets/images/About1.png"; 
import image2 from "../assets/images/Brothers.jpeg"; 

const timelineText = [
  "კომპანია ველიქსი დაარსდა 2021 წელს, რათა მის გერმანელ პარტნიორებთან ერთად თავისი წვლილი შეეტანა საქართველოში პრემიუმ ხარისხის ჭაბურღილების მშენებლობის საქმეში, რაც პირველრიგში გულისხმობს, რომ საქართველოში ეტაპობრივად დამკვიდრდეს ჭაბურღილის მშენებლობის და მოწყობის ისეთი სტანდარტი, რომელიც შესაძლებელს გახდის ოპტიმალურად და გარემოსათვის ზიანის მიყენების გარეშე იქნას ათვისებული ჩვენს ქვეყნაში არსებული მიწისქვეშა წყლების რესურსი.",
  "თუმცაღა ჩვენი გუნდისა და მისი წამყვანი სპეციალისტების საქმიანობა დაიწყო გაცილებით ადრე, მაშინ როდესაც 2002 წელს ძმები გურაბანიძეების მიერ დაარსდა კომპანია იმედი, რომელიც იყო ამ დარგში მოღვაწეობის ერთგვარი საოჯახო ტრადიციის გაგრძელება, და ამიტომ დღეისათვის ჩვენი გუნდის ზოგიერთი წამყვანი  სპეციალისტის გამოცდილება აღემატება 30 წელს.",
  "	კომპანია იმედს მის ქართველ და უცხოელ პარტნიორებთან ერთად განხორციელებული აქვს მრავალი წარმატებული პროექტი  საქართველოში წყალმომარაგების გაუმჯობესების მიზნით. დაარსების დღიდან დღემდე ჩვენი გუნდის აქტივშია 150-მდე  წარმატებული პროექტი და 200-ზე მეტი გამართულად ფუნქციონირებადი ჭაბურღილი მთელი ქვეყნის მასშტაბით.",
  "ჩვენი გუნდისათვის განსაკუთრებით საამაყოა ჩვენს მიერ საქართველოს კონფლიქტისპირა 44 სოფელში სასმელი წყლის ჭაბურღილებისა და წყალმომარაგების სისტემების მოწყობა",
  "დღეისთვის ველიქსი არის საქართველოში ერთ-ერთი მოწინავე კომპანია, რომელსაც გერმანელ პარტნირებთან ერთად განხორციელებული აქვს პრემიუმ ხარისხის ჭაბურღილების მშენებლობის  პროექტები ისეთი კომპანიების დაკვეთით როგორებიცაა: კოკა-კოლა ბოთლერს ჯორჯია - წყალი მთის, წყალი მარგებელი - ნაბეღლავი, რედიქსი - ყვარლის ბაგა და ა.შ.",
];




const CompanyToday = () => {
  return (
   <div>
      {/* Hero Header */}
      <div
        className="relative w-full h-[300px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">ჩვენ შესახებ</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        {timelineText.map((text, index) => {
          const isBlue = index % 2 !== 0;
          const isImageBox = index === 1;

          return (
            <div
              key={index}
              className={`w-full px-6 md:px-20 py-10 ${
                isBlue ? "bg-[#eaf4fc]" : "bg-white"
              }`}
            >
              <div
                className={`flex flex-col ${
                  isImageBox ? "md:flex-row" : ""
                } gap-6 md:gap-10 items-center`}
              >
                <div
                  className={`flex-1 text-gray-800 text-[17px] leading-relaxed bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-md`}
                >
                  {text}
                </div>

                {isImageBox && (
                  <div className="w-full max-w-[240px]">
                    <img
                      src={image2}
                      alt="Brothers Founders"
                      className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CompanyToday;
