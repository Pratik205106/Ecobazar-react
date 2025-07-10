// import { companyLogoImg } from "../utils/data";

// const CompanyLogo = () => {
//   return (
//     <main className="h-[9.5rem]  max-w-[82.5rem] mx-auto overflow-hidden"> 
//       <div className="grid grid-cols-6 justify-between items-center h-full ">  
//         {companyLogoImg.map((logo, index) => (
//           <div key={index} className="flex items-center justify-center"> 
//             <img src={logo.image} height={32} width={81.85} /> 
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default CompanyLogo;




import { companyLogoImg } from "../utils/data";

const CompanyLogo = () => {
  return (
    <main className="h-[9.5rem] max-w-full mx-auto overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center h-full gap-y-6 px-auto">
        {companyLogoImg.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={logo.image} height={32} width={81.85} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CompanyLogo;
