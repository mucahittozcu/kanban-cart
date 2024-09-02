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

      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-y-8 rounded-lg p-10 w-[600px] h-[650px] bg-blue-900 bg-opacity-80">
       <h1 className="text-6xl mb-5 text-white font-bold">LOGIN</h1>
        <input 
          type="text"
          className=" border rounded-xl pl-5 p-3 w-96 text-lg "
          placeholder="Username"
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          type="email"
          className=" border rounded-xl pl-5 p-3 w-96 text-lg "
          placeholder="E-mail"
          required
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
         <button className="text-2xl font-semibold border rounded-xl p-2 w-40 h-14 bg-white text-blue-950 ">Login</button>
      
    </form>

 </div>
    )
}
export default Login