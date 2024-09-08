"use client"
import SiteContext from "@/context/SiteContext"
import { RiArrowDownWideLine,RiArrowUpWideLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { useContext, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
const Projects = () => {
    const {projectOne,setProjectOne,projectTwo,setProjectTwo,projectThree,setProjectThree,projectFour,setProjectFour,log,isOpen,setIsOpen} = useContext(SiteContext)

    const projectContentOne = [{projectName:"Proje İsim 1" ,nameOne: "Overview",nameTwo: "Notifications",nameThree: "Analytics",nameFour: "Reports", color: "red", value: 10}]
    const projectContentTwo = [{projectName:"Proje İsim 2" ,nameOne: "Overview",nameTwo: "Notifications",nameThree: "Analytics",nameFour: "Reports", color: "blue", value: 10}]
    const projectContentThree = [{projectName:"Proje İsim 3" ,nameOne: "Overview",nameTwo: "Notifications",nameThree: "Analytics",nameFour: "Reports", color: "yellow", value: 10}]
    const projectContentFour = [{projectName:"Proje İsim 4" ,nameOne: "Overview",nameTwo: "Notifications",nameThree: "Analytics",nameFour: "Reports", color: "purple", value: 10}]

    const handleProjectOneChange = () => {
       setProjectOne((pre) => !pre)
       setProjectTwo(false)
       setProjectThree(false)
       setProjectFour(false)
    }
    const handleProjectTwoChange = () => {
       setProjectTwo((pre) => !pre)
       setProjectOne(false)
       setProjectThree(false)
       setProjectFour(false)
    }
    const handleProjectThreeChange = () => {
       setProjectThree((pre) => !pre)
       setProjectOne(false)
       setProjectTwo(false)
       setProjectFour(false)
    }
    const handleProjectFourChange = () => {
       setProjectFour((pre) => !pre)
       setProjectOne(false)
       setProjectTwo(false)
       setProjectThree(false)
    }
    const userName = log.length > 0 ? log[0].name : "Kullanıcı Adı";
    const userEmail = log.length > 0 ? log[0].email : "Email Adresi";
 return (
  <div className="flex relative w-[500px]">
      <div className="w-[80px] h-screen bg-blue-950 relative ">
         <div className="flex flex-col gap-y-2 absolute top-10 left-2 ">
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
         </div>

         <div className="flex flex-col absolute bottom-24 gap-y-2 left-2 ">
          <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
           <button className=" hover:bg-white hover:duration-700 hover:opacity-100 p-3  rounded-xl "><FaRegBell size={35} color="grey" className=" opacity-40" /></button>
         </div>
         <img src={"Avatar.png"} className=" w-14 h-14 left-3 absolute bottom-3 rounded-full" />
      </div>
  

      <RxHamburgerMenu color="white" size={40} onClick={() => setIsOpen((pre) => !pre)} className="cursor-pointer opacity-80 absolute top-3 left-4 z-20 lg:hidden" />

    <div  className={` flex lg:relative bg-white h-screen shadow-xl transition-transform transform ${isOpen ? 'translate-x-20' : '-translate-x-full'} shadow-2xl lg:translate-x-0 duration-300 fixed top-0 left-0 lg:left-0 bg-slate-50 w-[400px] h-screen xl:w-[400px] xl:h-screen lg:w-[400px] lg:h-screen z-10 lg:z-auto lg:block lg:static`}>


    <div className={`w-[400px] relative h-screen pt-10 pl-3 pr-5`}>
     <h2 className="text-2xl pb-2 font-bold">Projeler</h2>

     <div className="pl-5 ">
       <div className="relative">
    {projectOne ? <RiArrowUpWideLine color="black" onClick={handleProjectOneChange} size={30} className="absolute right-0 cursor-pointer" /> : <RiArrowDownWideLine color="black" size={30} onClick={handleProjectOneChange} className="absolute right-0 cursor-pointer" /> }
          <h3 onClick={handleProjectOneChange} className="text-xl mb-3 mt-5 font-semibold cursor-pointer flex items-center gap-x-2">
              <span style={{ backgroundColor: 'red' }} className="w-3 h-3 rounded-full inline-block"></span>
                 Proje İsim 1
          </h3>
       </div>
       {projectOne && projectContentOne.map((cnt,i) => (
         <div key={i} className="pl-8 flex gap-x-48">
            <div className="flex flex-col gap-y-3">
              <h4>{cnt.nameOne}</h4>
              <h4>{cnt.nameTwo}</h4>
              <h4>{cnt.nameThree}</h4>
              <h4>{cnt.nameFour}</h4>
            </div>
              <div className="flex flex-col gap-y-2 pt-1 ">
                <span className=" border border-gray-300 flex justify-center w-7 rounded-xl ">{cnt.value}</span>
                <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
                <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
                <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
              </div>
            <span style={{backgroundColor:`${cnt.color}`}}></span>
         </div>
       ))}
     </div>

     <div className="pl-5">
     <div className="relative">
    {projectTwo ? <RiArrowUpWideLine color="black" onClick={handleProjectTwoChange} size={30} className="absolute right-0 cursor-pointer" /> : <RiArrowDownWideLine color="black" size={30} onClick={handleProjectTwoChange} className="absolute right-0 cursor-pointer" /> }
        <h3 onClick={handleProjectTwoChange} className="text-xl mb-3 mt-5 font-semibold cursor-pointer flex items-center gap-x-2">
          <span style={{ backgroundColor: 'blue' }} className="w-3 h-3 rounded-full inline-block"></span>
          Proje İsim 2
        </h3>
       </div>
       {projectTwo && projectContentTwo.map((cnt,i) => (
         <div key={i} className="pl-8 flex gap-x-48">
         <div className="flex flex-col gap-y-3">
           <h4>{cnt.nameOne}</h4>
           <h4>{cnt.nameTwo}</h4>
           <h4>{cnt.nameThree}</h4>
           <h4>{cnt.nameFour}</h4>
         </div>
           <div className="flex flex-col gap-y-2 pt-1 ">
             <span className=" border border-gray-300 flex justify-center w-7 rounded-xl ">{cnt.value}</span>
             <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
             <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
             <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
           </div>
         <span style={{backgroundColor:`${cnt.color}`}}></span>
      </div>
       ))}
     </div>

     <div className="pl-5">
     <div className="relative">
    {projectThree ? <RiArrowUpWideLine color="black" onClick={handleProjectThreeChange} size={30} className="absolute right-0 cursor-pointer" /> : <RiArrowDownWideLine color="black" size={30} onClick={handleProjectThreeChange} className="absolute right-0 cursor-pointer" /> }
        <h3 onClick={handleProjectThreeChange} className="text-xl mb-3 mt-5 font-semibold cursor-pointer flex items-center gap-x-2"> 
          <span style={{ backgroundColor: 'yellow' }} className="w-3 h-3 rounded-full inline-block"></span>
          Proje İsim 3
        </h3>
       </div>
       {projectThree && projectContentThree.map((cnt,i) => (
          <div key={i} className="pl-8 flex gap-x-48">
          <div className="flex flex-col gap-y-3">
            <h4>{cnt.nameOne}</h4>
            <h4>{cnt.nameTwo}</h4>
            <h4>{cnt.nameThree}</h4>
            <h4>{cnt.nameFour}</h4>
          </div>
            <div className="flex flex-col gap-y-2 pt-1 ">
              <span className=" border border-gray-300 flex justify-center w-7 rounded-xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
            </div>
          <span style={{backgroundColor:`${cnt.color}`}}></span>
       </div>
       ))}
     </div>

     <div className="pl-5">
     <div className="relative">
    {projectFour ? <RiArrowUpWideLine color="black" onClick={handleProjectFourChange} size={30} className="absolute right-0 cursor-pointer" /> : <RiArrowDownWideLine color="black" size={30} onClick={handleProjectFourChange} className="absolute right-0 cursor-pointer" /> }
        <h3 onClick={handleProjectFourChange} className="text-xl mb-3 mt-5 font-semibold cursor-pointer flex items-center gap-x-2">
           <span style={{ backgroundColor: 'purple' }} className="w-3 h-3 rounded-full inline-block"></span>
           Proje İsim 4
        </h3>
       </div>
       {projectFour && projectContentFour.map((cnt,i) => (
          <div key={i} className="pl-8 flex gap-x-48">
          <div className="flex flex-col gap-y-3">
            <h4>{cnt.nameOne}</h4>
            <h4>{cnt.nameTwo}</h4>
            <h4>{cnt.nameThree}</h4>
            <h4>{cnt.nameFour}</h4>
          </div>
            <div className="flex flex-col gap-y-2 pt-1 ">
              <span className=" border border-gray-300 flex justify-center w-7 rounded-xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
              <span className=" border border-gray-300 flex justify-center w-7 rounded-2xl ">{cnt.value}</span>
            </div>
          <span className={`${cnt.color} w-5 h-5`}></span>
       </div>
       ))}
     </div>
       <h3 className="text-xl mb-3 ml-10 mt-5 opacity-40 cursor-pointer">Proje Oluştur</h3>


    </div>
       <h3 className="text-2xl text-black absolute bottom-7 left-10 mb-3 mt-5 font-bold"> {userName}</h3>
       <p className="text-xl text-black absolute bottom-1 left-10 mb-3 mt-5">{userEmail}</p>
       
    </div>

    </div>
  )
}
export default Projects