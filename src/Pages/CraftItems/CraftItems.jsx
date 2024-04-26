import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CraftItems = () => {
   let {user,loading}=useContext(AuthContext)
     let [userAddeddata,setUserAddedData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4545/crafts')
        .then(res=>res.json())
        .then(data=>{
        setUserAddedData(data)
        })
    },[])
    return (
        <div>

            <div id="container">
             <div id="img">
              <img className="w-full h-full" src="https://i.ibb.co/sjwVcst/bl14.jpg" alt="" />
             </div>

             <div id="content">
               <h1>Name</h1>
               
             </div>
            </div>
           
        </div>
    );
};

export default CraftItems;