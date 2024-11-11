"use client"
import SiteContext from "@/context/SiteContext"
import { useContext, useEffect } from "react"

const Login = () => {
 const {userName,setUserName,mail,setMail,log,login,handleSubmit,foto,setFoto} = useContext(SiteContext)

 const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log("Loaded image:", reader.result)
      setFoto(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

 useEffect(() => {
  if(login){
    console.log("Foto",foto)
    window.location.href = '/boards'
  }
 },[login,foto])

  return (
 <div className="h-screen w-screen flex justify-center items-center bg-white-100">

      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-8 sm:gap-y-8 md:gap-y-10 rounded-lg p-10 w-[470px] h-[550px] sm:w-[600px] sm:h-[650px] md:w-[700px] md:h-[750px] bg-blue-900 bg-opacity-80">
       <h1 className="text-7xl mb-5 text-white font-bold">LOGIN</h1>
        <input 
          type="text"
          className=" border rounded-xl pl-5 p-3 w-[350px] text-lg sm:pl-7 sm:p-4 sm:w-[450px] sm:text-xl "
          placeholder="Username"
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          type="email"
          className=" border rounded-xl pl-5 p-3 w-[350px] text-lg sm:pl-7 sm:p-4 sm:w-[450px] sm:text-xl "
          placeholder="E-mail"
          required
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
        <input 
          type="file"
          accept="image/*"
          className=" cursor-pointer border rounded-xl pl-5 p-3 w-[350px] text-lg sm:pl-7 sm:p-3 sm:w-[350px] sm:text-xl "
          onChange={handleImageChange}
        />
         <button className="flex justify-center items-center text-2xl sm:text-3xl font-semibold border rounded-xl p-2 w-40 h-14 sm:p-4 sm:w-48 sm:h-16 bg-white text-blue-950 ">Login</button>
      
    </form>

 </div>
    )
}
export default Login

//////////////////////
// "use client";
// import SiteContext from "@/context/SiteContext";
// import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";
// import { FaRegBell } from "react-icons/fa";
// import { useContext, useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Projects = () => {
//   const { log, isOpen, setIsOpen, activeProject, setActiveProject,foto } = useContext(SiteContext);

//   const projects = [
//     { id: 1, name: "Proje İsim 1", color: "red", details: ["Overview", "Notifications", "Analytics", "Reports"], value: 10 },
//     { id: 2, name: "Proje İsim 2", color: "blue", details: ["Overview", "Notifications", "Analytics", "Reports"], value: 10 },
//     { id: 3, name: "Proje İsim 3", color: "yellow", details: ["Overview", "Notifications", "Analytics", "Reports"], value: 10 },
//     { id: 4, name: "Proje İsim 4", color: "purple", details: ["Overview", "Notifications", "Analytics", "Reports"], value: 10 }
//   ];

//   const toggleProject = (id) => {
//     setActiveProject((prev) => (prev === id ? null : id));
//   };

//   const userName = log.length > 0 ? log[0].name : "Kullanıcı Adı";
//   const userEmail = log.length > 0 ? log[0].email : "Email Adresi";

//   return (
//     <div className="flex relative w-[500px]">
//       <div className="w-[80px] h-screen bg-blue-950 relative">
//         <div className="flex flex-col gap-y-2 absolute top-10 left-2 ">
//           {Array(4).fill(null).map((_, index) => (
//             <button key={index} className="hover:bg-white hover:duration-700 hover:opacity-100 p-3 rounded-xl">
//               <FaRegBell size={35} color="grey" className="opacity-40" />
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col absolute bottom-24 gap-y-2 left-2 ">
//           {Array(4).fill(null).map((_, index) => (
//             <button key={index} className="hover:bg-white hover:duration-700 hover:opacity-100 p-3 rounded-xl">
//               <FaRegBell size={35} color="grey" className="opacity-40" />
//             </button>
//           ))}
//         </div>
//         <img src={foto} alt="User" className="w-16 h-16 left-3 absolute bottom-3 rounded-full" />
//       </div>

//       <RxHamburgerMenu
//         color="white"
//         size={40}
//         onClick={() => setIsOpen((pre) => !pre)}
//         className="cursor-pointer opacity-80 absolute top-3 left-4 z-20 lg:hidden"
//       />

//       <div className={`flex lg:relative bg-white h-screen shadow-xl transition-transform transform ${isOpen ? 'translate-x-20' : '-translate-x-full'} lg:translate-x-0 duration-300 fixed top-0 left-0 w-[400px] z-10 lg:block lg:static`}>
//         <div className="w-[400px] relative h-screen pt-10 pl-3 pr-5">
//           <h2 className="text-2xl pb-2 font-bold">Projeler</h2>

//           {projects.map((project) => (
//             <div key={project.id} className="pl-5">
//               <div className="relative">
//                 {activeProject === project.id ? (
//                   <RiArrowUpWideLine color="black" onClick={() => toggleProject(project.id)} size={30} className="absolute right-0 cursor-pointer" />
//                 ) : (
//                   <RiArrowDownWideLine color="black" size={30} onClick={() => toggleProject(project.id)} className="absolute right-0 cursor-pointer" />
//                 )}
//                 <h3 onClick={() => toggleProject(project.id)} className="text-xl mb-3 mt-5 font-semibold cursor-pointer flex items-center gap-x-2">
//                   <span style={{ backgroundColor: project.color }} className="w-3 h-3 rounded-full inline-block"></span>
//                   {project.name}
//                 </h3>
//               </div>

//               {activeProject === project.id && (
//                 <div className="pl-8 flex gap-x-48">
//                   <div className="flex flex-col gap-y-3">
//                     {project.details.map((detail, index) => (
//                       <h4 key={index}>{detail}</h4>
//                     ))}
//                   </div>
//                   <div className="flex flex-col gap-y-2 pt-1">
//                     {Array(4).fill(null).map((_, index) => (
//                       <span key={index} className="border border-gray-300 flex justify-center w-7 rounded-xl">{project.value}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}

//           <h3 className="text-xl mb-3 ml-10 mt-5 opacity-40 cursor-pointer">Proje Oluştur</h3>

//           <h3 className="text-2xl text-black absolute bottom-7 left-10 mb-3 mt-5 font-bold">{userName}</h3>
//           <p className="text-xl text-black absolute bottom-1 left-10 mb-3 mt-5">{userEmail}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

