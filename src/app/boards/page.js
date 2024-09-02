"use client"
import SiteContext from "@/context/SiteContext"
import { useContext,useState } from "react"
import Link from "next/link"
import Projects from "@/components/Projects"
import { LuPlus } from "react-icons/lu";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import Draggable from "react-draggable"
import { useRouter } from "next/navigation"


const page = () => {
const {mouseEnterOne,setMouseEnterOne,mouseEnterTwo,setMouseEnterTwo,mouseEnterThree,setMouseEnterThree,mouseEnterFour,setMouseEnterFour,mouseEnterSix,setMouseEnterSix,addBoard,setAddBoard,cursor,setCursor} = useContext(SiteContext)
const router = useRouter()
const { pathname } = router;
const isActive = (path) => pathname === path;


const handleStart = () => {
  setCursor(true)
}
const handleStop = () => {
  setCursor(false)
}

  return (
    <div className="h-screen w-screen flex bg-blue-50 justify-center items-center relative overflow-hidden">
    
     <div className="h-screen w-screen flex ">
    <div className=" z-50"><Projects /></div>
    <div className="flex flex-col bg-blue-50 h-screen w-screen">
      <h1 className=" text-blue-700 text-4xl font-bold pt-7 pl-10 ">Frontend Case</h1>
     <div className="flex pl-10 pt-5 font-semibold  ">
        <Link href={"/boards"} className={`p-3 text-opacity-50 bg-white hover:bg-slate-50 px-6 border rounded-b-md rounded-l-lg rounded-r-none rounded-t-md rounded-tr-none ${isActive('/boards') ? 'text-blue-900' : ''}`}>
          Boards
        </Link>
        <Link className={`p-3 px-5 text-opacity-50 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >List</Link>
        <Link className={`p-3 px-5 text-opacity-50 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >Other</Link>
        <Link className={`p-3 px-5 text-opacity-50 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >Other</Link>
        <Link className={`p-3 px-5 text-opacity-50 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >Other</Link>
        <Link className={`p-3 px-5 text-opacity-50 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >Other</Link>
        <Link className={`p-3 px-5 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-lg rounded-t-md rounded-tl-none ${isActive('/boards') ? 'text-blue-900' : ''}`} href={"/boards"} >Other</Link>
     </div>
    </div>
    
     <Draggable onStart={handleStart} onStop={handleStop} axis="x" bounds={{ left: -830, top: 0, right: 0, bottom: 0 }}>
  <div className={`${cursor ? "cursor-grabbing" : "cursor-grab"} flex gap-x-5 absolute top-40 left-[530px]`}>

    <div className="bg-white cursor-default relative rounded-xl w-[350px] h-[750px] ">
       <div className=" border-b-2 h-16 ">
          <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">OPEN</h2>
           <span className="font-semibold absolute top-4 left-[115px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
           <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
           <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
       </div>
    </div>
    <div onMouseEnter={() => setMouseEnterOne(true)} onMouseLeave={() => setMouseEnterOne(false)} className="bg-white relative rounded-xl w-[350px] h-[750px] cursor-default">
       {mouseEnterOne ? 
         <>
         <div className=" border-b-2 h-16 ">
           <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
            <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">0</span>
            <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
            <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
        </div>
         <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />  
         <span className="text-2xl font-bold opacity-40 absolute bottom-[230px] left-[115px] cursor-pointer">+ New Task</span>
         </>
       :
       <>
       <div className=" border-b-2 h-16 ">
         <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
          <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
          <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
          <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
      </div>
       <img src={"Layer 1.png"} className="absolute bottom-64 left-20 w-52 h-44" />  
       
       </>
      }
    </div>
    <div onMouseEnter={() => setMouseEnterTwo(true)} onMouseLeave={() => setMouseEnterTwo(false)} className="bg-white relative rounded-xl w-[350px] h-[750px] cursor-default">
       {mouseEnterTwo ? 
         <>
         <div className=" border-b-2 h-16 ">
           <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
            <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">0</span>
            <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
            <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
        </div>
         <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />  
         <span className="text-2xl font-bold opacity-40 absolute bottom-[230px] left-[115px] cursor-pointer">+ New Task</span>
         </>
       :
       <>
       <div className=" border-b-2 h-16 ">
         <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
          <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
          <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
          <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
      </div>
       <img src={"Layer 1.png"} className="absolute bottom-64 left-20 w-52 h-44" />  
       
       </>
      }
    </div>
    <div onMouseEnter={() => setMouseEnterThree(true)} onMouseLeave={() => setMouseEnterThree(false)} className="bg-white relative rounded-xl w-[350px] h-[750px] cursor-default">
       {mouseEnterThree ? 
         <>
         <div className=" border-b-2 h-16 ">
           <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
            <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">0</span>
            <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
            <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
        </div>
         <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />  
         <span className="text-2xl font-bold opacity-40 absolute bottom-[230px] left-[115px] cursor-pointer">+ New Task</span>
         </>
       :
       <>
       <div className=" border-b-2 h-16 ">
         <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
          <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
          <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
          <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
      </div>
       <img src={"Layer 1.png"} className="absolute bottom-64 left-20 w-52 h-44" />  
       
       </>
      }
    </div>
    <div onMouseEnter={() => setMouseEnterFour(true)} onMouseLeave={() => setMouseEnterFour(false)} className="bg-white relative rounded-xl w-[350px] h-[750px] cursor-default">
       {mouseEnterFour ? 
         <>
         <div className=" border-b-2 h-16 ">
           <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
            <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">0</span>
            <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
            <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
        </div>
         <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />  
         <span className="text-2xl font-bold opacity-40 absolute bottom-[230px] left-[115px] cursor-pointer">+ New Task</span>
         </>
       :
       <>
       <div className=" border-b-2 h-16 ">
         <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
          <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
          <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
          <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
      </div>
       <img src={"Layer 1.png"} className="absolute bottom-64 left-20 w-52 h-44" />  
       
       </>
      }
    </div>
   
    <>
    {addBoard ?
    <div onMouseEnter={() => setMouseEnterSix(true)} onMouseLeave={() => setMouseEnterSix(false)} className="bg-white relative rounded-xl w-[350px] mr-5 h-[750px] cursor-default">
       {mouseEnterSix ? 
         <>
         <div className=" border-b-2 h-16 ">
           <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
            <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">0</span>
            <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
            <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
        </div>
         <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />  
         <span className="text-2xl font-bold opacity-40 absolute bottom-[230px] left-[115px] cursor-pointer">+ New Task</span>
         </>
       :
       <>
       <div className=" border-b-2 h-16 ">
         <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
          <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
          <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
          <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
      </div>
       <img src={"Layer 1.png"} className="absolute bottom-64 left-20 w-52 h-44" />  
       
       </>
      }
    </div>
    :
    <div onClick={() => setAddBoard(true)}  className="bg-white mr-5 relative rounded-xl w-[350px] h-[750px] cursor-default">
      <span className="text-3xl cursor-pointer font-bold opacity-40 absolute bottom-[300px] left-[95px]">+ Add Board</span>
    </div>
    }
    </>

  </div>
  </Draggable>
    </div>
    
    </div>
  )
}
export default page