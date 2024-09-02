"use client"
import SiteContext from "@/context/SiteContext"
import { useState,useEffect } from "react";

const Provider = ({children}) => {
    const [userName,setUserName] = useState("")
    const [mail,setMail] = useState("")
    const [log,setLog] = useState([])
    const [login,setLogin] = useState(false)
    const [projectOne,setProjectOne] = useState(false)
    const [projectTwo,setProjectTwo] = useState(false)
    const [projectThree,setProjectThree] = useState(false)
    const [projectFour,setProjectFour] = useState(false)
    const [mouseEnterOne,setMouseEnterOne] = useState(false) 
    const [mouseEnterTwo,setMouseEnterTwo] = useState(false) 
    const [mouseEnterThree,setMouseEnterThree] = useState(false) 
    const [mouseEnterFour,setMouseEnterFour] = useState(false) 
    const [mouseEnterSix,setMouseEnterSix] = useState(false) 
    const [addBoard,setAddBoard] = useState(false) 
    const [cursor,setCursor] = useState(false) 

    useEffect(() => {
      const savedLog = localStorage.getItem("log")
      if(savedLog){
         setLog(JSON.parse(savedLog))
      } 
   },[])

    const handleSubmit = (e) => {
      try{
         e.preventDefault();
         const data = {name:userName, email:mail};
         const newData = [...log,data]
         setLog(newData)
         localStorage.setItem("log",JSON.stringify(newData))
         setLogin(true)
      }
      catch(error){
         console.error("Submit işlemi sırasında bir hata oluştu:", error)
      }
    }

 const data = {
    userName,setUserName,
    mail,setMail,
    log,setLog,
    projectOne,setProjectOne,
    projectTwo,setProjectTwo,
    projectThree,setProjectThree,
    projectFour,setProjectFour,
    mouseEnterOne,setMouseEnterOne,
    mouseEnterTwo,setMouseEnterTwo,
    mouseEnterThree,setMouseEnterThree,
    mouseEnterFour,setMouseEnterFour,
    mouseEnterSix,setMouseEnterSix,
    addBoard,setAddBoard,
    login,setLogin,
    cursor,setCursor,
    handleSubmit
}

  return (
 <SiteContext.Provider value={data}>
    {children}
 </SiteContext.Provider>
  )
}
export default Provider