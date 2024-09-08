"use client"
import SiteContext from "@/context/SiteContext"
import { useContext, useEffect } from "react"

const Login = () => {
 const {userName,setUserName,mail,setMail,log,login,setLog,handleSubmit} = useContext(SiteContext)

 useEffect(() => {
  if(login){
    window.location.href = '/boards'
  }
 },[log,login])

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
         <button className="flex justify-center items-center text-2xl sm:text-3xl font-semibold border rounded-xl p-2 w-40 h-14 sm:p-4 sm:w-48 sm:h-16 bg-white text-blue-950 ">Login</button>
      
    </form>

 </div>
    )
}
export default Login