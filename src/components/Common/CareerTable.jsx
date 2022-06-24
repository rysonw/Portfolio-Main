const careerData = [
  {
    companyName: "Hawaii Air National Guard",
    designation: "RF Transmission Operation Journeyman",
    duration: "4 Years",
    link: "https://dod.hawaii.gov/hiang/"
  },
  {
    companyName: "Corsair Ranch",
    designation: "SWE Intern",
    duration: "2 Months",
    link: "https://corsairranch.dso.mil/"
  },
  {
    companyName: "Major League Hacking ",
    designation: "Fellow",
    duration: "3 Months",
    link: "https://fellowship.mlh.io/"
  },
];

const CareerTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-custom-blue uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-primary">
          <tr>
            <th scope="col" className="px-6 py-3 text-lg">
              Company Name
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Designation
            </th>
            <th scope="col" className="px-6 py-3 text-lg">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {careerData.map((data, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-custom-orange dark:text-white whitespace-nowrap text-base"
                href = {data.link}
              >
                {data.companyName}
              </th>
              <td className="px-6 py-4 text-base text-custom-blue">
                {data.designation}
              </td>
              <td className="px-6 py-4 text-base text-custom-purple">
                {data.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CareerTable;
