// import React, { useState } from "react";
// import { countryStateData } from "./countryStateData";

// const CountryStateSelector = () => {
//   const [selectedCountry, setSelectedCountry] = useState("Nepal");

//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCountry(e.target.value);
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <div>
//         <label className="block mb-1 font-semibold">Country</label>
//         <select
//           value={selectedCountry}
//           onChange={handleCountryChange}
//           className="border p-2 w-full rounded"
//         >
//           {Object.keys(countryStateData).map((country) => (
//             <option key={country} value={country}>
//               {country}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-semibold">State</label>
//         <select className="border p-2 w-full rounded">
//           {countryStateData[selectedCountry].map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default CountryStateSelector;
