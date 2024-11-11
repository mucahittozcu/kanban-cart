"use client"
import SiteContext from "@/context/SiteContext"
import { useState,useEffect } from "react";

const Provider = ({children}) => {

    const [userName,setUserName] = useState("")
    const [mail,setMail] = useState("")
    const [foto,setFoto] = useState(null)
    const [activeProject,setActiveProject] = useState(null)
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
    const [isOpen, setIsOpen] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [text,setText] = useState("")
    const [textName,setTextName] = useState("")
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('') 
   //  const [task1, setTask1] = useState([]) 
   //  const [task2, setTask2] = useState([]) 
   //  const [task3, setTask3] = useState([]) 
   //  const [task4, setTask4] = useState([]) 
   //  const [task6, setTask6] = useState([]) 
    const [taskType, setTaskType] = useState(null) 
    const [isDndDragging, setIsDndDragging] = useState(false);
const [isDraggableActive, setIsDraggableActive] = useState(true);
const [tasks, setTasks] = useState({
   task1: [],
   task2: [],
   task3: [],
   task4: [],
   task6: []
 });

    useEffect(() => {
       const savedLog = localStorage.getItem("log")
       console.log("Saved log:", savedLog)
       if(savedLog){
          setLog(JSON.parse(savedLog))
         } 
      },[])
      
      const handleSubmit = (e) => {
         try{
            e.preventDefault();
            console.log("Submitting data:", { name: userName, email: mail, foto: foto })
            const data = {name:userName, email:mail, foto:foto};
            const newData = [...log,data]
            setLog(newData)
            localStorage.setItem("log",JSON.stringify(newData))
            setLogin(true)
            setUserName("")
            setMail("")
            setFoto(null)
         }
         catch(error){
            console.error("Submit işlemi sırasında bir hata oluştu:", error)
         }
      }
      
      // useEffect(() => {
      //    const savedTask = localStorage.getItem("task1");
      //    if(savedTask){
      //       try{
      //          setTask1(JSON.parse(savedTask));
      //       }
      //       catch (error){
      //          console.error("Error task1",error)
      //          setTask1([]);
      //       }
      //    } else if (task1.length === 0){
      //       setTask1([]);
      //    }
      // },[])
      // useEffect(() => {
      //    const savedTask = localStorage.getItem("task2")
      //    if(savedTask){
      //       try{
      //          setTask2(JSON.parse(savedTask));
      //       }
      //       catch (error){
      //          console.error("Error task2",error)
      //          setTask2([]);
      //       }
      //    } else if (task2.length === 0){
      //       setTask2([]);
      //    }
      // },[])
      // useEffect(() => {
      //    const savedTask = localStorage.getItem("task3")
      //    if(savedTask){
      //       try{
      //          setTask3(JSON.parse(savedTask));
      //       }
      //       catch (error){
      //          console.error("Error task3",error)
      //          setTask3([]);
      //       }
      //    } else if (task3.length === 0){
      //       setTask3([]);
      //    }
      // },[])
      // useEffect(() => {
      //    const savedTask = localStorage.getItem("task4")
      //    if(savedTask){
      //       try{
      //          setTask4(JSON.parse(savedTask));
      //       }
      //       catch (error){
      //          console.error("Error task4",error)
      //          setTask4([]);
      //       }
      //    } else if (task4.length === 0){
      //       setTask4([]);
      //    }
      // },[])
      // useEffect(() => {
      //    const savedTask = localStorage.getItem("task6")
      //    if(savedTask){
      //       try{
      //          setTask6(JSON.parse(savedTask));
      //       }
      //       catch (error){
      //          console.error("Error task6",error)
      //          setTask6([]);
      //       }
      //    } else if (task6.length === 0){
      //       setTask6([]);
      //    }
      // },[])
      useEffect(() => {
         const updatedTasks = {};

         Object.keys(tasks).forEach((taskKey) => {
            const savedTask = localStorage.getItem(taskKey);

            if(savedTask){
               try{
                  updatedTasks[taskKey] = JSON.parse(savedTask);
               } catch (error){
                  console.error(`Error ${taskKey}`,error);
                  updatedTasks[taskKey] = [];
               }
            } else {
               updatedTasks[taskKey] = [];
            }
         })
         setTasks(updatedTasks);
      },[])

      const handleTaskSubmit1 = (e) => {
         e.preventDefault();
       
         try {
           const taskData = {
             id: crypto.randomUUID(),
             taskName: textName,
             task: text,
             startDate: startDate,
             endDate: endDate,
           };
       
           // Seçilen panoyu belirle
           const selectedBoard = taskType;
       
           if (selectedBoard && tasks[selectedBoard]) {
             // Seçilen panoya göre yeni görev ekleme
             const updatedTasks = {
               ...tasks,
               [selectedBoard]: [...tasks[selectedBoard], taskData],
             };
       
             setTasks(updatedTasks);
             localStorage.setItem(selectedBoard, JSON.stringify(updatedTasks[selectedBoard]));
             
             closeModal();
       
             // Formu sıfırlama
             setTextName("");
             setText("");
             setStartDate("");
             setEndDate("");
           } else {
             console.error("Geçersiz pano tipi:", selectedBoard);
           }
         } catch (error) {
           console.error("Görev ekleme sırasında bir hata oluştu:", error);
         }
       };
       
      // const handleTaskSubmit1 = (e) => {
      //    e.preventDefault();
      //    try{
      //       if(taskType === "task1"){
      //       const taskData = {id:crypto.randomUUID(), taskName:textName, task:text, startDate:startDate, endDate:endDate};
      //       const newTask = [...task1,taskData]
      //       setTask1(newTask)
      //       localStorage.setItem("task1",JSON.stringify(newTask))
      //       closeModal()
      //       setTextName("")
      //       setText("")
      //       setStartDate("")
      //       setEndDate("")
      //       }
      //       else if(taskType === "task2"){
      //       const taskData = {id:crypto.randomUUID(), taskName:textName, task:text, startDate:startDate, endDate:endDate};
      //       const newTask = [...task2,taskData]
      //       setTask2(newTask)
      //       localStorage.setItem("task2",JSON.stringify(newTask))
      //       closeModal()
      //       setTextName("")
      //       setText("")
      //       setStartDate("")
      //       setEndDate("")
      //       }
      //       else if(taskType === "task3"){
      //          const taskData = {id:crypto.randomUUID(), taskName:textName, task:text, startDate:startDate, endDate:endDate};
      //          const newTask = [...task3,taskData]
      //          setTask3(newTask)
      //          localStorage.setItem("task3",JSON.stringify(newTask))
      //          closeModal()
      //          setTextName("")
      //          setText("")
      //          setStartDate("")
      //          setEndDate("")
      //          }
      //          else if(taskType === "task4"){
      //             const taskData = {id:crypto.randomUUID(), taskName:textName, task:text, startDate:startDate, endDate:endDate};
      //             const newTask = [...task4,taskData]
      //             setTask4(newTask)
      //             localStorage.setItem("task4",JSON.stringify(newTask))
      //             closeModal()
      //             setTextName("")
      //             setText("")
      //             setStartDate("")
      //             setEndDate("")
      //             }
      //             else if(taskType === "task6"){
      //                const taskData = {id:crypto.randomUUID(), taskName:textName, task:text, startDate:startDate, endDate:endDate};
      //                const newTask = [...task6,taskData]
      //                setTask6(newTask)
      //                localStorage.setItem("task6",JSON.stringify(newTask))
      //                closeModal()
      //                setTextName("")
      //                setText("")
      //                setStartDate("")
      //                setEndDate("")
      //                }
      //    }
      //    catch(error){
      //       console.error("Task işlemi sırasında bir hata oluştu:", error)
      //    }
      // }


      const openModal = (task) => {
        setShowModal(true)
        setTaskType(task)
       }
       const closeModal = () => {
        setShowModal(false)
        setTaskType(null)
       }
      
      const handleStart = () => {
        setCursor(true);
  setIsDraggableActive(false);
      }
      const handleStop = () => {
        setCursor(false);
        setIsDraggableActive(true);
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
    isOpen,setIsOpen,
    foto,setFoto,
    activeProject,setActiveProject,
    endDate,setEndDate,
    startDate,setStartDate,
    text,setText,
    textName,setTextName,
    showModal,setShowModal,
    openModal,
    closeModal,
    handleTaskSubmit1,
   //  task1,setTask1,
   //  task2,setTask2,
   //  task3,setTask3,
   //  task4,setTask4,
   //  task6, setTask6,
   tasks,setTasks,
   taskType, setTaskType,
    handleStart,
    handleStop,
    handleSubmit,
    isDndDragging, setIsDndDragging,
    isDraggableActive, setIsDraggableActive
}

  return (
 <SiteContext.Provider value={data}>
    {children}
 </SiteContext.Provider>
  )
}
export default Provider