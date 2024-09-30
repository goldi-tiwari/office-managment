const TaskOverview=()=>{
    return(
  <>
<body className="ml-[500px] ">
  
<div className=" ">
    <h1 className=" ml-80 text-black -mt-52 flex text-4xl "><b>Overview</b></h1>


<div className=" -ml-[10px]  flex  space-x-20 mt-[100px]">

    <div className=" bg-slate-400 rounded-xl  p-20">
        <p className="text-xl text-center text-black pt-4"><b>Total Assigned Task: 5</b></p>
    </div> 

    <div className="  bg-slate-400 rounded-xl p-20">
        <p className="text-xl text-center text-black pt-4"><b>Tasks in Progress: 2</b></p>
    </div>

    <div className=" bg-slate-400 rounded-xl p-20">
        <p className="text-xl text-center text-black pt-4"><b>Completed Tasks: 3</b></p>
    </div>
</div>
</div>
</body>
  </>
    )
    }

    export default TaskOverview;