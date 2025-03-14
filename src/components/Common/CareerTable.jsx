import { FaShieldAlt, FaCode, FaLaptopCode, FaMicrosoft, FaRocket, FaAmazon } from "react-icons/fa"; 

const careerData = [
  {
    companyName: "Hawaii Air National Guard",
    designation: "Cyber Defense Operator",
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
    companyName: "Major League Hacking",
    designation: "Fellow",
    duration: "3 Months",
    link: "https://fellowship.mlh.io/",
    logo: "./public/HIANG.jpg"
  },
  {
    companyName: "Amazon",
    designation: "SDE Intern",
    duration: "6 Months",
    link: "https://aws.amazon.com/elasticloadbalancing/"
  },
  {
    companyName: "NASA JPL",
    designation: "SWE Intern",
    duration: "4 Months",
    link: "https://www.jpl.nasa.gov/"
  },
  {
    companyName: "Microsoft (Current)",
    designation: "SWE Intern",
    duration: "3 Months",
    link: "https://azure.microsoft.com/en-us"
  }
];

const CareerTable = () => {
  return (
    <div className="mt-8 custom:w-full">

      {/* Centered Container */}
      <div className="max-w-4xl mx-auto px-4"> {/* Constrain width and center */}
        {/* Table Container */}
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            {/* Table Header */}
            <thead className="text-xs uppercase bg-gray-50 font-primary">
              <tr>
                <th scope="col" className="px-6 py-4 text-lg font-semibold text-gray-900">
                  Company Name
                </th>
                <th scope="col" className="px-6 py-4 text-lg font-semibold text-gray-900">
                  Role
                </th>
                <th scope="col" className="px-6 py-4 text-lg font-semibold text-gray-900">
                  Duration
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {careerData.map((data, index) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50 transition-colors"
                >
                  {/* Company Name */}
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-base flex items-center"
                  >
                    {/* Icon */}
                    <div className="mr-3">
                      {data.companyName === "Hawaii Air National Guard" && (
                        <FaShieldAlt className="text-2xl text-blue-600" />
                      )}
                      {data.companyName === "Corsair Ranch" && (
                        <FaCode className="text-2xl text-green-600" />
                      )}
                      {data.companyName === "Major League Hacking" && (
                        <FaLaptopCode className="text-2xl text-purple-600" />
                      )}
                      {data.companyName === "Microsoft (Current)" && (
                        <FaMicrosoft className="text-2xl text-blue-800" />
                      )}
                      {data.companyName === "NASA JPL" && (
                        <FaRocket className="text-2xl text-red-600" />
                      )}
                      {data.companyName === "Amazon" && (
                        <FaAmazon className="text-2xl text-orange-600" />
                      )}
                    </div>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {data.companyName}
                    </a>
                  </th>

                  {/* Role */}
                  <td className="px-6 py-4 text-base text-gray-700 font-semibold"> {/* Added font-semibold */}
                    {data.designation}
                  </td>

                  {/* Duration */}
                  <td className="px-6 py-4 text-base text-gray-700 font-semibold"> {/* Added font-semibold */}
                    {data.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareerTable;