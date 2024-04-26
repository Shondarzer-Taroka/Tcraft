import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
const MyCraftAndList = () => {
    let {user,}=useContext(AuthContext)
    let [getUser,setgetUser]=useState([])
    let [loading,setLoading]=useState(true)
    // let [myUser,setMyUSer]=useState(getUser)
   useEffect(()=>{
     setLoading(true)
       fetch('http://localhost:4545/crafts')
       .then(res=>res.json())
       .then(data=>{
       setgetUser(data)
       setLoading(false)
    //    setSpinner(false)
       })
   },[])

   console.log(getUser);
   let myUser=getUser.filter(value=> value.email == user.email)
// //    setgetUser(myUser)
//      setMyUSer(myUser)
   console.log(myUser);
//    if (user) {
//    let mys=getUser.filter(value=> value.email == user.email)
//    setgetUser(mys)
//    console.log(mys);
//    } 
    return (
     loading ?<div className="flex justify-center">  <div className="">
      <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="color-ring-loading"
       wrapperStyle={{}}
       wrapperClass="color-ring-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
       /></div></div>: <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

     {
                myUser.map((value)=> {
                   return <aside key={value._id} className="border-[1px] border-black">

                <div id="img" className="p-4">
                  <img className="w-full" src={value?.image} alt="" />
                </div>

                <div id="content" className="p-4">
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Item Name: {value?.item_name} </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: {value?.price} </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: {value?.customization} </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: {value?.stockStatus} </p>
                
                 <div id="btn-cont" className="flex gap-1">
                    <Link to={'/update'}><button className="btn btn-accent">Update</button> </Link>
                    <button className="btn btn-secondary">Delete</button>
                 </div>
                </div>

            </aside>
                })
            }
            
            {/* <aside className="border-[1px] border-black">

                <div id="img">
                  <img className="w-full" src='https://i.ibb.co/sjwVcst/bl14.jpg' alt="" />
                </div>

                <div id="content">
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> Lorem, ipsum. </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />price: $55 </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> customization: No </p>
                   <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> stock status: In stock </p>
                
                 <div id="btn-cont">
                    <Link to={'/update'}><button className="btn btn-accent">Update</button> </Link>
                    <button className="btn btn-secondary">Delete</button>
                 </div>
                </div>

            </aside> */}
        
        </div>
);
};

export default MyCraftAndList;