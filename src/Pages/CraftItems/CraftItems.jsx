import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import img1 from '../../assets/banner1.png'
import '../../Components/Style/effect/effect.css'
const CraftItems = () => {
   let {user,loading}=useContext(AuthContext)
     let [userAddeddata,setUserAddedData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4545/craftitems')
        .then(res=>res.json())
        .then(data=>{
        // setUserAddedData(data)
        console.log(data);

        })
    },[])
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         
         <aside className="border-[1px]  rounded-lg" id="shadowing">

            <div id="doet" className="p-3 ">
                <div className="w-full overflow-hidden rounded-lg">
                       <img className="w-full rounded-lg" id="imgeffect" src={img1} alt="" />
                </div>
             
            </div>

            <div id="content" className="px-3 pt-1">
             <h1 className="font-bold text-3xl"> item name </h1>
             <h3 className="font-semibold"> Subcategory Name </h3>
             <p>price: $77</p>
             <p>In stock</p>
             <p> Trocessing time: </p>
            </div>

            <div className="p-3">
                <button className="btn btn-info text-white">View details</button>
            </div>

         </aside>

           
        </section>
    );
};

export default CraftItems;