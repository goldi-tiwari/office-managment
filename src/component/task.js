import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Outlet } from "react-router-dom";



function Admin(){

    return (
        <>

            <div className="box bg-black w-80 h-lvh text-white fixed">
                <div className=" text-green-300 text-center pt-2 ">
                  <h1 ><b>Employee Deshbord</b></h1>
                 {/* <span><CloseIcon/></span>      */}
                 </div>
                  <div className="BT ml-20 mt-20 ">
                   <a href="/TaskOverview"><button><b>Tasks Overview</b></button></a>
                   <br></br><br></br>
                   <a href="/View"><button><b>View Tasks</b></button></a>
                   <br></br><br></br>
                   <a href="/Collaborate"><button><b>Collaborate</b></button></a>
                </div>
                <div>
                <Outlet />
                </div>
            </div>
   
        </>

    );
}
export default Admin;