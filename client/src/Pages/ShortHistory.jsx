const timelineData = [
  {
    year: "2002",
    title: "კომპანიის დაფუძნება",
    description: "მოხდა მანამდე არსებული კომპანიის ბაზაზე და გამოცდილებაზე ახალი კომპანიის ჩამოყალიბება",
  },
  {
    year: "2007–2008",
    title: "პირველი პროექტი ",
    description: "საერთაშორისო კომპანიის დაკვეთით",
  },
  {
    year: "2011–2012",
    title: "პარტნიორობა გერმანულ კომპანიებთან",
    description: "პირველი პროექტი გერმანელ ზედამხედველთან ერთად გერმანული საინსტალაციო მასალების გამოყენებით",
  },
  {
    year: "2013–2018",
    title: "რეგიონული გაფართოება",
    description: "კონფლიქტისპირა 44 სოფელში წყალმომარაგების სისტემების მოწყობა",
  },
  {
    year: "2021",
    title: "კომპანიის განახლება",
    description: "პირველად განვახორციელეთ შესყიდვები ჩვენი ორი ახალი სტრატეგიული პარტნიორისგან როგორც გერმანიაში, ისე თურქეთში. რამაც მნიშვნელოვნად გააუმჯობესა ჭაბურღილის საინსტალაციო მასალების ხარისხი",
  },
];

const timelineDataSecondRow = [
  {
    year: "2022",
    title: "თანამშრომლობის დასაწყისი კოკა-კოლა ბოთლერს ჯორჯიასთან",
    description: "ჩვენს მიერ ჩვენს გერმანელ პარტნიორებთან ერთად კომპანია კოკა-კოლა ბოთლერს ჯორჯიასათვის სთვის დაიგეგმა და განხორციელდა ჭაბურღილის მშენებლობა-მოწყობის პროექტი. ეს პროექტი იყო ჩვენი და ჩვენი გერმანელი პარტნიორის  GWE-ს კიდევ ერთი ერთობლივი კოლაბორაცია, რომელმაც საშუალება მოგვცა შეგევეძინა კიდევ ერთი უმნიშვნელოვანესი რეფერენსკლიენტი",
  },
  {
    year: "2024",
    title: "თანამშრომლობის დასაწყისი კომპანია ნაბეღლავთან",
    description:"გრძელვადიანი თანამშრომლობის კიდევ ერთი წარმატებული დასაწყისი. ჩოხატაურის მუნიციპალიტეტის სოფელ ნაბეღლავში 2 ერთეული პრემიუმ ხარისხის ჭაბურღილის მშენებლობა-მოწყობის პროექტი",
  },
  {
    year: "2025",
    title: "ჭაბურღილის-მოვლა პატრონობის სერვისი",
    description: "ჩვენს ახალშეძენილ გერმანელ პარტნიორებთან ერთად დაიწყო მუშაობა ქართული რეალობისათვის ინოვაციური სერვისის, ჭაბურღილის მოვლა-პატრონობის, დანერგვაზე",
  },
];

export default function ShortHistory() {
  return (
    <div className="px-4 py-10 bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-2xl font-bold text-center mb-10 text-blue-800">
        კომპანიის განვითარების ძირითადი ეტაპები
      </h2>

      {/* First row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between relative mb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-1/5 text-center mb-10 md:mb-0"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            <div className="h-16 w-1 bg-blue-400"></div>
            <div className="mt-2 text-lg font-semibold text-blue-200">{item.year}</div>
            <div className="mt-1 font-bold text-blue-800">{item.title}</div>
            <p className="text-sm mt-1 text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="absolute top-2 md:top-4 left-0 right-0 h-4 bg-gradient-to-r from-blue-800 to-blue-300 z-0 hidden md:block rounded-full"></div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-evenly relative">
        {timelineDataSecondRow.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:w-1/4 text-center mb-10 md:mb-0"
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            <div className="h-16 w-1 bg-blue-400"></div>
            <div className="mt-2 text-lg font-semibold text-blue-200">{item.year}</div>
            <div className="mt-1 font-bold text-blue-800">{item.title}</div>
            <p className="text-sm mt-1 text-gray-700">{item.description}</p>
          </div>
        ))}
        <div className="absolute top-2 md:top-4 left-0 right-0 h-4 bg-gradient-to-r from-blue-800 to-blue-300 z-0 hidden md:block rounded-full"></div>
      </div>
    </div>
  );
}
