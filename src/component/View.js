

const View=()=>{
    return(
        
<body className="ml-[500px]">
    {/* <div className="">
    <h1 className="ml-96 text-black -pb-[500px]"><b>ViewTasks</b></h1>
    </div> */}
    
<div className="text-black -mt-[120px]">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow p-2 w-[610px]  outline-none border border-gray-800 rounded-lg  "
      />
     </div>
  

   <div>
   <table class="min-w-full bg-white border border-gray-300 mt-10">
    <thead>
        <tr class="bg-black">
            <th class="py-4 px-10 border border-gray-300 text-left">Task ID</th>
            <th class="py-4 px-10 border border-gray-300 text-left">Title</th>
            <th class="py-4 px-10 border border-gray-300 text-left">Status</th>
            <th class="py-4 px-10 border border-gray-300 text-left">Due Date</th>
            <th class="py-4 px-10 border border-gray-300 text-left">Actions</th>
        </tr>
    </thead>
 </table>

 </div>
 </body>
    )
}
export default View;