import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import image1 from "../assets/chart/chart.png";
import image2 from "../assets/chart/chart-2.png";
import image3 from "../assets/chart/chart-3.png";
import image4 from "../assets/maintenance/maintenance-2.png"
import image5 from "../assets/maintenance/maintenance-3.png"

const data = [
  { stage: "", value: 75 },
  { stage: "საექსპლუატაციო პერიოდი", value: 55 },
  { stage: "", value: 20 },
];

const Maintenance = () => {
  const sections = [
    {
      text: `მიწისქვეშა წყლებში შემავალმა ნივთიერებებმა, როგორიცაა რკინა, მანგანუმი, კალციუმი და მაგნიუმი, ასევე ორგანულმა ნივთიერებებმა, ჭაბურღილის გამოყენებისას დროთა განმავლობაში შეიძლება დაახშოს ჭაბურღილის ფილტრები და ფილტრების გარშემო არსებული ქვა-ღორღის ფენა, რაც რათქმაუნდა ხელს შეუშლის ჭაბურღილის სრულფასოვან ფუნქციონირებას. შესაბამისად ჭაბურღილის ეფექტიანიანი ფუნქციონირების უზრუნველსაყოფად აუცილებელია თითოეული ჭაბურღილის რეგულარული პრევენციული დათვალიერება საჭიროების ან პრობლემის საწყის ეტაპზევე იდენტიფიცირებისთვის.`,
      image: "chart",
    },
    {
      text: `ჩვენი გამოცდილი გუნდი ჩვენს გერმანელ პარტნიორებთან ერთად თქვენი ჭაბურღილისათვის შეიმუშავებს მისი მოვლა-პატრონობის ინდივიდუალურ გეგმას, რომლის მნიშვნელოვანი ნაწილიც იქნება მისი ქიმიური შემადგენლობისა და მუშაობის რეჟიმის მიხედვით საუკეთესო პრაქტიკებით განსაზღვრული პერიოდულობით ჩასატარებელი რეგენერაციის სამუშაოების სქემაც.`,
      image: image4,
    },
    {
      text: `ჭაბურღილის რეგენერაციის უახლესი ტექნოლოგიებისა და გამწმენდი მასალების გამოყენებით, ჩვენ ეფექტურად აღვადგენთ თქვენს ჭაბურღილს და დავუბრუნებთ მას მისი თავდაპირველი ფუნქციონირების პარამეტრებს.`,
      image: image5,
    },
  ];

  return (
    <div className=" py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl text-center font-bold text-primaryBlue mb-12">
          ჭაბურღილის მოვლა და რეგენერაცია
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="md:w-1/2 text-justify text-gray-800 leading-relaxed">
              {section.text}
            </div>
            <div className="md:w-1/2">
              {section.image === "chart" ? (
                <div className="relative w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="stage" />
                      <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  {/* Chart-related images */}
                  <div className="absolute top-[55%] left-[15%] w-24 h-24">
                    <img src={image1} alt="Stage 1" className="w-full h-full object-cover" />
                    <p className="text-[7px] text-center mt-1">საჭიროებს ჰიდრომექანიკურ აღდგენას</p>
                  </div>
                  <div className="absolute top-[55%] left-[45%] w-24 h-24">
                    <img src={image2} alt="Stage 2" className="w-full h-full object-cover" />
                    <p className="text-[7px] text-center mt-1">საჭიროებს დამატებითი ქიმიური ნივთიერებებით დამუშავებას</p>
                  </div>
                  <div className="absolute top-[55%] left-[75%] w-24 h-24">
                    <img src={image3} alt="Stage 3" className="w-full h-full object-cover" />
                    <p className="text-[7px] text-center mt-1">შორსწასული დაზიანებების გამო ექვემდებარება სრულ სანირებას</p>
                  </div>
                </div>
              ) : (
                <img
                  src={section.image}
                  alt={`maintenance-${index + 1}`}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              )}
            </div>
          </div>
        ))}

        {/* Final text block (no image) */}
        <div className="text-gray-800 leading-relaxed text-justify space-y-6">
          <p>
            ჭაბურღილის სრულყოფილი მოვლა-პატრონობის სამუშაოების ფარგლებში აუცილებელია, რომ ჩვენს მიერ განხორციელდეს ჭაბურღილის პასპორტში მითითებული მისი პირველადი პარამეტრების მუდმივი მონიტორინგი. ეს საშუალებას მოგვცემს, რომ საჭიროების შემთხვევაში ჩვენს მიერ მოხდეს ჭაბურღილის ვიდეოდათვალიერება და რეგენერაციის შესაბამისი კონცეფციის მოსამზადებლად ჭაბურღილიდან სპეციფიკური ნიმუშების აღება მისი შემდგომი ლაბორატორიული კვლევისათვის. მოპოვებული მონაცემების დეტალური ანალიზის შედეგად შეფასდება ჭაბურღილის არსებული მდგომარეობა, დადგინდება მისი რეგენერაციის საჭიროება და ასევე განისაზღვრება რეგენერაციის მეთოდი (მექანიკური, ქიმიური ან/და მათი კომბინირებული გამოყენება).
          </p>
          <p>
            ჩვენი ერთ-ერთი უმთავრესი მიზანია თითოეული ჩვენს მიერ აშენებული ჭაბურღილის სიცოცხლის ხანგრძლივობისა და ექსპლოატაციის ეფექტურობის მაქსიმიზაცია, რითიც ერთის მხრივ ვუზრუნველვყოფთ ჩვენი კლიენტების გრძელვადიან, უწყვეტ და საიმედო წყალმომარაგებას, ხოლო მეორეს მხრივ რეგულარული მოვლა-პატრონობის და მისი დროული რეაბილიტაციის ღონისძიებების გატარებით ხელს ვუწყობთ ჩვენი ქვეყნის მიწისქვეშა წყლების რესურსების დაცვას.
          </p>
          <p>
            ჭაბურღილის მოვლა-პატრონობის და აღდგენითი სამუშაოების ღირებულება განისაზღვრება პროექტით, რომელშიც აღნიშნულია ჩასატარებელი სამუშაოების მოცულობა, თანმიმდევრობა და პროექტით განსაზღვრული სხვა პირობები.
          </p>
          <p className="font-semibold">
            ჭაბურღილის მოვლა-პატრონობისას პროაქტიური მიდგომის გამოყენება საშუალებას მისცემს მფლობელს საწყის ეტაპზევე აღმოაჩინოს პრობლემა და შესაბამისად ნაკლები დანახარჯით ჩატარდეს სარეაბილიტაციო სამუშაოები, ასევე ხელს შეუწყობს ჭაბურღილის გამოყენების დროის გახანგრძლივებას და წყლის თავდაპირველი ხარისხის სტაბილურად შენარჩუნებას წლების განმავლობაში.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
