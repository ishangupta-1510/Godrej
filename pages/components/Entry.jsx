import React from "react";

const Overview = () => {
  const handleScrollToSection = () => {
    // Scroll to the section with id 'my-section'
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="flex pt-32 xl:pt-0 xl:flex-row h-screen flex-col-reverse xl:flex-col">
      <div className="transition duration-1000 ease-in-out transform justify-center items-center xl:justify-center hover:brightness-50 content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full relative">
        <img
          className=""
          src="garden.png"
          alt=""
          onClick={handleScrollToSection}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
          <h1 className="text-white text-3xl font-bold">Explore More...</h1>
        </div>
      </div>
      <div className="justify-center flex flex-row xl:flex-col px-10 xl:px-40 xl:w-1/2 py-10 xl:h-full">
        <div className="text-center justify-center flex flex-col">
          <div
            className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(circle1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="overflow-hidden">
            <div className="xl:text-left xl:w-96">
              <h1 className="text-base xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] h-24 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="text-center  ml-1">
          <div
            className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(circle1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="text-base xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="text-base xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

// import React from "react";

// const Entry = () => {
//   const handleScrollToSection = () => {
//     // Scroll to the section with id 'my-section'
//     document.getElementById("my-section").scrollIntoView();
//   };
//   return (
//     <div className="w-0.5 mt-32 xl:mt-40 md:h-[800px] xl:h-screen xl:w-screen py-10 bg-no-repeat banner -z-10 relative flex xl:flex-row-reverse overflow-x: scroll">
//       <div className="">
//         <img
//           className=""
//           src="building.png"
//           alt=""
//           onClick={handleScrollToSection}
//         />
//         <div className="">
//           <h1 className="text-white text-3xl font-bold">Explore More...</h1>
//         </div>
//       </div>
//       <div className="justify-center items-center absolute w-1/2 flex left-0 h-full">
//         <div
//           className="z-10 absolute w-1/2"
//           style={{
//             background: "url(garden.png)",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             width: "600px",
//             height: "500px",
//             borderRadius: "20px",
//             filter:
//               "drop-shadow(8px 4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//           }}
//         ></div>
//         <div
//           className="z-11 absolute w-1/2"
//           style={{
//             background: "url(gardenback.png)",
//             transform: "rotate(-2deg)",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "left center",
//             width: "600px",
//             height: "500px",
//             backgroundSize: "300px",
//             marginRight: "100px",
//             marginTop: "230px",
//           }}
//         ></div>
//       </div>
//       <div className="flex xl:items-center justify-center xl:w-1/2 w-1 ">
//         <div className="absolute left-2 xl:relative flex xl:flex-col xl:max-w-full">
//           <div className="flex flex-col xl:flex-row items-center">
//             <div
//               className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//               style={{
//                 backgroundImage: "url(circle1.png)",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//             <div className="text-center xl:text-left w-32 xl:w-96 ">
//               <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                 Grand entry
//               </h1>
//               <div className="flex flex-col xl:flex-row">
//                 <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                   3 level of Podium
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
//                   Parking + 27 floors
//                 </p>
//               </div>
//               <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                 Entry gate with security
//               </p>
//               <div className="flex flex-col xl:flex-row">
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   Total Land: 17.76 Acres
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   (Phase 1 & 2)
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex px-3 xl:px-0 flex-col xl:flex-row items-center ">
//             <div
//               className="w-0.5 xl:w-0 h-24 xl:h-24 xl:mr-6"
//               style={{
//                 backgroundImage: "url(line.png)",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//           </div>
//           <div className="flex flex-col xl:flex-row items-center">
//             <div
//               className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//               style={{
//                 backgroundImage: "url(circle2.png)",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//               }}
//             ></div>
//             <div className="text-center xl:text-left w-32 xl:w-96 ">
//               <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                 Agile Greens
//               </h1>
//               <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                 1.65 Acres – Eco Park
//               </p>
//               <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                 4.27 Acres Green Area
//               </p>
//             </div>
//           </div>
//           <div className="hidden xl:block">
//             <div className="flex px-3 xl:px-0 flex-col xl:flex-row items-center ">
//               <div
//                 className="w-0.5 xl:w-0 h-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(line.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col xl:flex-row items-center">
//               <div
//                 className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(circle2.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <div className="text-center xl:text-left w-32 xl:w-96 ">
//                 <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                   Agile Greens
//                 </h1>
//                 <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                   1.65 Acres – Eco Park
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   4.27 Acres Green Area
//                 </p>
//               </div>
//             </div>
//             <div className="flex px-3 xl:px-0 flex-col xl:flex-row items-center ">
//               <div
//                 className="w-0.5 xl:w-0 h-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(line.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col xl:flex-row items-center">
//               <div
//                 className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(circle2.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <div className="text-center xl:text-left w-32 xl:w-96 ">
//                 <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                   Agile Greens
//                 </h1>
//                 <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                   1.65 Acres – Eco Park
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   4.27 Acres Green Area
//                 </p>
//               </div>
//             </div>
//             <div className="flex px-3 xl:px-0 flex-col xl:flex-row items-center ">
//               <div
//                 className="w-0.5 xl:w-0 h-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(line.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col xl:flex-row items-center">
//               <div
//                 className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(circle2.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <div className="text-center xl:text-left w-32 xl:w-96 ">
//                 <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                   Agile Greens
//                 </h1>
//                 <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                   1.65 Acres – Eco Park
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   4.27 Acres Green Area
//                 </p>
//               </div>
//             </div>
//             <div className="flex px-3 xl:px-0 flex-col xl:flex-row items-center ">
//               <div
//                 className="w-0.5 xl:w-0 h-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(line.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col xl:flex-row items-center">
//               <div
//                 className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
//                 style={{
//                   backgroundImage: "url(circle2.png)",
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                 }}
//               ></div>
//               <div className="text-center xl:text-left w-32 xl:w-96 ">
//                 <h1 className="text-base xl:text-2xl font-bold text-amber-500">
//                   Agile Greens
//                 </h1>
//                 <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
//                   1.65 Acres – Eco Park
//                 </p>
//                 <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
//                   4.27 Acres Green Area
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Entry;
