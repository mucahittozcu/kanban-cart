"use client"
import { DragDropContext, Droppable, Draggable as DndDraggable} from '@hello-pangea/dnd';
// import { Draggable as DndDraggable,  Droppable, DragDropContext } from "react-beautiful-dnd"
import Draggable from "react-draggable"
import SiteContext from "@/context/SiteContext"
import { useContext,useState } from "react"
import Projects from "@/components/Projects"
import { LuPlus } from "react-icons/lu";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import Navbar from "@/app/navbar/page"
import Provider from "@/context/Provider"

const page = () => {
const {
  mouseEnterOne,setMouseEnterOne,
  mouseEnterTwo,setMouseEnterTwo,
  mouseEnterThree,setMouseEnterThree,
  mouseEnterFour,setMouseEnterFour,
  mouseEnterSix,setMouseEnterSix,
  addBoard,setAddBoard,
  cursor,setCursor,
  endDate,setEndDate,
  startDate,setStartDate,
  text,setText,
  textName,setTextName,
  showModal,setShowModal,
  openModal,
  closeModal,
  handleStart,
  handleStop,
  // task1,setTask1,
  // task2,setTask2,
  // task3,setTask3,
  // task4,setTask4,
  // task6, setTask6,
  tasks,setTasks,
  handleTaskSubmit1,
  isDndDragging, setIsDndDragging,
  isDraggableActive, setIsDraggableActive
} = useContext(SiteContext)

const onDragStart = () => {
  if(!isDndDragging){
    setIsDndDragging(true);
    setIsDraggableActive(false);
  }
};

const handleStartDateChange = (e) => {
  setStartDate(e.target.value)
}

const handleEndDateChange = (e) => {
  if (e.target.value >= startDate) {
    setEndDate(e.target.value);
  } else {
    alert("Bitiş tarihi, başlangıç tarihinden önce olamaz!")
  }
}

// const onDragEnd = (result) => {
//   if(isDndDragging){
//     setIsDndDragging(false);
//     setIsDraggableActive(true);
//   }
//   const { source, destination } = result;
// // Eğer hedef yoksa (pano dışına bırakılmışsa), işlemi iptal et.
//   if(!destination) return;

//   const sourceBoard = source.droppableId;
//   const destBoard = destination.droppableId;



//   if(source.droppableId === destination.droppableId){
//     const reorderedTasks = Array.from(task1);
//     const [removed] = reorderedTasks.splice(source.index, 1);
//     reorderedTasks.splice(destination.index, 0, removed);
//     setTask1(reorderedTasks);
//   } else{
//     const sourceTasks = Array.from(task1);
//     const destTasks = Array.from(task2);
//     const [removed] = sourceTasks.splice(source.index, 1);
//     destTasks.splice(destination.index, 0, removed);
//     setTask1(sourceTasks);
//     setTask2(destTasks);
//   }
// };
const onDragEnd = (result) => {
  const { source, destination } = result;

  // Eğer hedef yoksa (pano dışına bırakılmışsa), işlemi iptal et.
  if (!destination) return;

  const sourceBoard = source.droppableId;
  const destBoard = destination.droppableId;

  // sourceBoard ve destBoard'un geçerli olup olmadığını kontrol edin
  if (!tasks[sourceBoard] || !tasks[destBoard]) {
    console.error("Geçersiz pano tipi:", sourceBoard, destBoard);
    return;
  }

  const sourceTasks = Array.from(tasks[sourceBoard]);
  const destTasks = Array.from(tasks[destBoard]);

  const [removed] = sourceTasks.splice(source.index, 1);
  destTasks.splice(destination.index, 0, removed);

  setTasks((prevTasks) => ({
    ...prevTasks,
    [sourceBoard]: sourceTasks,
    [destBoard]: destTasks,
  }));

  // localStorage güncellemesi
  localStorage.setItem(sourceBoard, JSON.stringify(sourceTasks));
  localStorage.setItem(destBoard, JSON.stringify(destTasks));
};



console.log('Task 1:', tasks.task1);
console.log('Task 2:', tasks.task2);
console.log('Task 3:', tasks.task3);
console.log('Task 4:', tasks.task4);
console.log('Task 6:', tasks.task6);
const validTask1 = tasks.task1.filter(tsk => tsk !== undefined);
const validTask2 = tasks.task2.filter(tsk => tsk !== undefined);
const validTask3 = tasks.task3.filter(tsk => tsk !== undefined);
const validTask4 = tasks.task4.filter(tsk => tsk !== undefined);
const validTask6 = tasks.task6.filter(tsk => tsk !== undefined);
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
<div className="h-screen w-screen flex bg-blue-50 justify-center items-center relative overflow-hidden">
    
 <div className="h-screen w-screen flex ">
    <div className=" z-50"><Projects /></div>
    <div className="absolute left-14 lg:left-[500px]">
    <div className="flex flex-col bg-blue-50 h-screen w-screen">
      <h1 className=" text-blue-700 text-4xl font-bold pt-7 pl-10 ">Frontend Case</h1>
       <Navbar/>
    </div>
    
     {/* <Draggable disabled={!isDraggableActive} onStart={handleStart} onStop={handleStop} axis="x" bounds={{ left: -850, top: 0, right: 0, bottom: 0 }}> */}
  <div className={`${cursor ? "cursor-grabbing" : "cursor-grab"} flex gap-x-5 absolute top-40 left-[40px]`}>

    <div className="bg-white cursor-default relative rounded-xl w-[350px] h-[750px] ">
       <div className=" border-b-2 h-16 ">
          <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">OPEN</h2>
           <span className="font-semibold absolute top-4 left-[115px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">3</span>
           <button className="absolute top-4 right-14 opacity-75"><LuPlus size={30} color="gray" /></button>
           <button className="absolute top-4 right-3 opacity-75"><HiOutlineDotsCircleHorizontal size={30} color="gray" /></button>
       </div>
    </div>

    <Droppable droppableId="task1">
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      onMouseEnter={() => setMouseEnterOne(true)}
      onMouseLeave={() => setMouseEnterOne(false)}
      className={`bg-white relative rounded-xl w-[350px] h-[750px] cursor-default`}
    >
      <div className="border-b-2 h-16">
        <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
        <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">{validTask1.length}</span>
        <button onClick={() => openModal("task1")} className="absolute top-4 right-14 opacity-75">
          <LuPlus size={30} color="gray" />
        </button>
        <button className="absolute top-4 right-3 opacity-75">
          <HiOutlineDotsCircleHorizontal size={30} color="gray" />
        </button>
      </div>

      {validTask1 && validTask1.length > 0 ? (
        validTask1.map((tsk, index) => (
          tsk && tsk.id ? (
          <DndDraggable key={tsk.id || `default-${index}`} draggableId={tsk.id ? tsk.id.toString() : `default-${index}`} index={index}>
          {/* / <DndDraggable key={tsk.id} draggableId={tsk.id ? tsk.id.toString() : "defaultId-1"} index={index}> */}
            {(provided) => (
              <div
                className="flex justify-center flex-col items-center mt-1"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="text-black w-[340px] h-auto border rounded-lg">
                  <h1 className="text-2xl text-orange-400 mb-2 ml-4 mt-2">{tsk.taskName}</h1>
                  <h2 className="text-xl mb-5 ml-4">{tsk.task}</h2>
                  <p className="text-sm opacity-40 ml-4 mb-2">
                    {tsk.startDate} - {tsk.endDate}
                  </p>
                </div>
              </div>
            )}
          </DndDraggable>
          ) : null
        ))
      ) : (
        <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />
      )}

{mouseEnterOne && (

<span
onClick={() => openModal("task1")}
className={`text-2xl font-semibold opacity-40 flex justify-center cursor-pointer ${validTask1.length > 0 ? "mt-2" : "absolute bottom-[230px] left-[115px]"}`}
>
    + New Task
  </span>
  )}

      {provided.placeholder}
    </div>
  )}
</Droppable>

<Droppable droppableId="task2">
  {(provided) => (
    <div
    ref={provided.innerRef}
    {...provided.droppableProps}
    onMouseEnter={() => setMouseEnterTwo(true)}
    onMouseLeave={() => setMouseEnterTwo(false)}
    className={`bg-white relative rounded-xl w-[350px] h-[750px] cursor-default`}
  >
    <div className="border-b-2 h-16">
      <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
      <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">{validTask2.length}</span>
      <button onClick={() => openModal("task2")} className="absolute top-4 right-14 opacity-75">
        <LuPlus size={30} color="gray" />
      </button>
      <button className="absolute top-4 right-3 opacity-75">
        <HiOutlineDotsCircleHorizontal size={30} color="gray" />
      </button>
    </div>

    {validTask2 && validTask2.length > 0 ? (
      validTask2.map((tsk, index) => (
        tsk && tsk.id ? (
        <DndDraggable key={tsk.id || `default-${index + 1}`} draggableId={tsk.id ? tsk.id.toString() : `default-${index + 1}`} index={index + 1}>
          {(provided) => (
            <div
              className="flex justify-center flex-col items-center mt-1"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="text-black w-[340px] h-auto border rounded-lg">
                <h1 className="text-2xl text-orange-400 mb-2 ml-4 mt-2">{tsk.taskName}</h1>
                <h2 className="text-xl mb-5 ml-4">{tsk.task}</h2>
                <p className="text-sm opacity-40 ml-4 mb-2">
                  {tsk.startDate} - {tsk.endDate}
                </p>
              </div>
            </div>
          )}
        </DndDraggable>
        ) : null
      ))
    ) : (
      <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />
    )}
{mouseEnterTwo && (

  <span
  onClick={() => openModal("task2")}
  className={`text-2xl font-semibold opacity-40 flex justify-center cursor-pointer ${validTask2.length > 0 ? "mt-2" : "absolute bottom-[230px] left-[115px]"}`}
  >
      + New Task
    </span>
    )}

    {provided.placeholder}
  </div>
    )}
    </Droppable>

    <Droppable droppableId="task3">
  {(provided) => (
    <div
    ref={provided.innerRef}
    {...provided.droppableProps}
    onMouseEnter={() => setMouseEnterThree(true)}
    onMouseLeave={() => setMouseEnterThree(false)}
    className={`bg-white relative rounded-xl w-[350px] h-[750px] cursor-default`}
  >
    <div className="border-b-2 h-16">
      <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
      <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">{validTask3.length}</span>
      <button onClick={() => openModal("task3")} className="absolute top-4 right-14 opacity-75">
        <LuPlus size={30} color="gray" />
      </button>
      <button className="absolute top-4 right-3 opacity-75">
        <HiOutlineDotsCircleHorizontal size={30} color="gray" />
      </button>
    </div>

    {validTask3 && validTask3.length > 0 ? (
      validTask3.map((tsk, index) => (
        tsk && tsk.id ? (
        <DndDraggable key={tsk.id || `default-${index + 2}`} draggableId={tsk.id ? tsk.id.toString() : `default-${index + 2}`} index={index + 2}>
          {(provided) => (
            <div
              className="flex justify-center flex-col items-center mt-1"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="text-black w-[340px] h-auto border rounded-lg">
                <h1 className="text-2xl text-orange-400 mb-2 ml-4 mt-2">{tsk.taskName}</h1>
                <h2 className="text-xl mb-5 ml-4">{tsk.task}</h2>
                <p className="text-sm opacity-40 ml-4 mb-2">
                  {tsk.startDate} - {tsk.endDate}
                </p>
              </div>
            </div>
          )}
        </DndDraggable>
        ) : null
      ))
    ) : (
      <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />
    )}
{mouseEnterThree && (

  <span
  onClick={() => openModal("task3")}
  className={`text-2xl font-semibold opacity-40 flex justify-center cursor-pointer ${validTask3.length > 0 ? "mt-2" : "absolute bottom-[230px] left-[115px]"}`}
  >
      + New Task
    </span>
    )}

    {provided.placeholder}
  </div>
    )}
    </Droppable>

    <Droppable droppableId="task4">
  {(provided) => (
    <div
    ref={provided.innerRef}
    {...provided.droppableProps}
    onMouseEnter={() => setMouseEnterFour(true)}
    onMouseLeave={() => setMouseEnterFour(false)}
    className={`bg-white relative rounded-xl w-[350px] h-[750px] cursor-default`}
  >
    <div className="border-b-2 h-16">
      <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
      <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">{validTask4.length}</span>
      <button onClick={() => openModal("task4")} className="absolute top-4 right-14 opacity-75">
        <LuPlus size={30} color="gray" />
      </button>
      <button className="absolute top-4 right-3 opacity-75">
        <HiOutlineDotsCircleHorizontal size={30} color="gray" />
      </button>
    </div>

    {validTask4 && validTask4.length > 0 ? (
      validTask4.map((tsk, index) => (
        tsk && tsk.id ? (
        <DndDraggable key={tsk.id || `default-${index + 3}`} draggableId={tsk.id ? tsk.id.toString() : `default-${index + 3}`} index={index + 3}>
          {(provided) => (
            <div
              className="flex justify-center flex-col items-center mt-1"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="text-black w-[340px] h-auto border rounded-lg">
                <h1 className="text-2xl text-orange-400 mb-2 ml-4 mt-2">{tsk.taskName}</h1>
                <h2 className="text-xl mb-5 ml-4">{tsk.task}</h2>
                <p className="text-sm opacity-40 ml-4 mb-2">
                  {tsk.startDate} - {tsk.endDate}
                </p>
              </div>
            </div>
          )}
        </DndDraggable>
        ) : null
      ))
    ) : (
      <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />
    )}
{mouseEnterFour && (

  <span
  onClick={() => openModal("task4")}
  className={`text-2xl font-semibold opacity-40 flex justify-center cursor-pointer ${validTask4.length > 0 ? "mt-2" : "absolute bottom-[230px] left-[115px]"}`}
  >
      + New Task
    </span>
    )}

    {provided.placeholder}
  </div>
    )}
    </Droppable>
   
    <>
    {addBoard ?
    <Droppable droppableId="task6">
    {(provided) => (
      <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      onMouseEnter={() => setMouseEnterSix(true)}
      onMouseLeave={() => setMouseEnterSix(false)}
      className={`bg-white relative rounded-xl w-[350px] h-[750px] cursor-default`}
    >
      <div className="border-b-2 h-16">
        <h2 className="font-semibold absolute top-4 left-6 text-blue-700 text-xl opacity-75">Board Title</h2>
        <span className="font-semibold absolute top-4 left-[145px] border border-blue-200 rounded-full px-2 bg-blue-50 text-opacity-75 text-blue-700 text-xl">{validTask6.length}</span>
        <button onClick={() => openModal("task6")} className="absolute top-4 right-14 opacity-75">
          <LuPlus size={30} color="gray" />
        </button>
        <button className="absolute top-4 right-3 opacity-75">
          <HiOutlineDotsCircleHorizontal size={30} color="gray" />
        </button>
      </div>
  
      {validTask6 && validTask6.length > 0 ? (
        validTask6.map((tsk, index) => (
          tsk && tsk.id ? (
          <DndDraggable key={tsk.id || `default-${index + 4}`} draggableId={tsk.id ? tsk.id.toString() : `default-${index + 4}`} index={index + 4}>
            {(provided) => (
              <div
                className="flex justify-center flex-col items-center mt-1"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="text-black w-[340px] h-auto border rounded-lg">
                  <h1 className="text-2xl text-orange-400 mb-2 ml-4 mt-2">{tsk.taskName}</h1>
                  <h2 className="text-xl mb-5 ml-4">{tsk.task}</h2>
                  <p className="text-sm opacity-40 ml-4 mb-2">
                    {tsk.startDate} - {tsk.endDate}
                  </p>
                </div>
              </div>
            )}
          </DndDraggable>
          ) : null
        ))
      ) : (
        <img src={"Layer 1.png"} className="absolute bottom-[270px] left-[80px] w-52 h-44" />
      )}
  {mouseEnterSix && (
  
    <span
    onClick={() => openModal("task6")}
    className={`text-2xl font-semibold opacity-40 flex justify-center cursor-pointer ${validTask6.length > 0 ? "mt-2" : "absolute bottom-[230px] left-[115px]"}`}
    >
        + New Task
      </span>
      )}
  
      {provided.placeholder}
    </div>
      )}
      </Droppable>
    :
    <div onClick={() => setAddBoard(true)}  className="bg-white mr-5 relative rounded-xl w-[350px] h-[750px] cursor-default">
      <span className="text-3xl cursor-pointer font-bold opacity-40 absolute bottom-[300px] left-[95px]">+ Add Board</span>
    </div>
    }
    </>

  </div>
  {/* </Draggable> */}
    
    {showModal && <Modal showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} text={text} setText={setText} handleEndDateChange={handleEndDateChange} handleStartDateChange={handleStartDateChange} task1={tasks.task1} setTask1={tasks.setTask1} handleTaskSubmit1={handleTaskSubmit1} textName={textName} setTextName={setTextName} />}
  </div>
  </div>
</div>
</DragDropContext>
  )
}
export default page


const Modal = ({ showModal,closeModal,startDate,endDate,text,setText,textName,setTextName,handleEndDateChange,handleStartDateChange,handleTaskSubmit1}) => {
  

  return showModal && (
    <div className="w-[900px] h-[800px] relative bg-white flex items-center justify-center z-50 shadow-2xl rounded-xl lg:fixed lg:inset-y-24 lg:left-[600px] lg:inset-x-80 ">
        <button className="p-4 px-10 absolute top-5 left-5 bg-blue-100 rounded-xl shadow-xl" onClick={closeModal}>Close Modal</button>
    
    <div className="">
      <h1 className="text-4xl font-bold flex justify-center text-blue-300">Create a Task</h1>

        <form onSubmit={handleTaskSubmit1} className="flex flex-col gap-y-2 p-20 bg-yellow-100">

        <input 
            type="text"
            placeholder="New Task Name"
            name=""
            className="border-black border mr-2 text-black rounded-lg p-2 py-3 w-80 "
            value={textName}
            onChange={(event) => setTextName(event.target.value)}
          />

          <input 
            type="text"
            placeholder="New Task"
            name=""
            className="border-black border mr-2 text-black rounded-lg p-2 py-3 w-80 "
            value={text}
            onChange={(event) => setText(event.target.value)}
          />

        <div className="flex flex-col gap-y-2 ">
        <input
          type="date"
          className="border-black border mr-2 text-black rounded-lg p-2 py-3 w-40 "
          value={startDate}
          onChange={handleStartDateChange}
        />
    
        <input
          type="date"
          className="border-black border mr-2 text-black rounded-lg p-2 py-3 w-40 "
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate} 
        />
      </div> 
      <button className="p-4 w-64 bg-blue-100 rounded-xl shadow-xl">Submit</button>
        </form>
      

      </div>

    </div>
  )
}