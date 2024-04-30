// import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ViewDetails = () => {
    let {id}= useParams()
    // let loadedData = useLoaderData()
    // console.log(loadedData);
     let [getViewDetails,setGetViewDtails]=useState([])
     let {user}=useContext(AuthContext)
     let [viewLoading,setViewLoading]=useState(true)
    // console.log(id);
    let { customization, item_name, price, processing_time, rating, stockStatus, subcategory_Name, image, short_description,user_name,email} = getViewDetails
    console.log(getViewDetails);
   
    
    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
     },[])
  

    useEffect(()=>{
        setViewLoading(true)
        fetch(`https://assignment-ten-server-orpin.vercel.app/viewdetails/${id}`)
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setGetViewDtails(data)
            setViewLoading(false)
            // console.log(loadedData);
        })
    },[id])
//   console.log(getViewDetails)
//   console.log(data);
    // let [craftData,setCraftData]=useState([])
    // console.log(loadedData);

    // // useEffect(()=>{
    // //     fetch('http://localhost:4545/crafts')
    // //     .then(res=> res.json())
    // //     .then(data=> {
    // //         console.log(data);
    // //         setCraftData(data)
    // //     })
    // // },[])
    return (
    viewLoading?   <div className="flex items-center justify-center"><span className="loading loading-dots loading-lg"></span> </div> :   <div>

            {/* { viewLoading && <div className="flex items-center justify-center"><span className="loading loading-dots loading-lg"></span> </div>} */}

 
       <h1 className="text-center font-bold text-4xl my-7"> View details</h1>

            <aside className="grid md:grid-cols-2 gap-3 ">
                <div className="flex flex-col ">
                    <div >
                        <img className="w-full" src={image} alt="" />
                    </div>


                </div>


                <div className="  flex flex-col items-center gap-3 ">

                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>Item Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="item_name" placeholder="Type your stock status" value={item_name} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Price:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="price" placeholder="Type your Processing time" value={price} id="" />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>Rating:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="rating" placeholder="Type your rating" value={rating} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Subcategory Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="subcategory_Name" placeholder="Type your Processing time" value={subcategory_Name} id="" />
                        </div>
                    </div>
               
                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>Stock-status:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" value={stockStatus} placeholder="Type your stock status" id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Customization:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="customization" placeholder="Type your Processing time" value={customization} id="" />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-1 w-full">
                        {/* <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span> </span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stock status" value={stockStatus} id="" />
                        </div> */}
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Processing time:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" value={processing_time} placeholder="Type your Processing time" id="" />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>User Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="user_name" placeholder="Type your Name" value={user_name} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Email: </span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" placeholder="Type your Processing time" value={email} id="" />
                        </div>
                    </div>

                    <div className="mt-7">

                    <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> short description:</span>
                            <textarea className="w-full"  id="" value={short_description} cols="30" rows="5"></textarea>
                        {/* <p className="text-wrap"> <span className="text-lg font-semibold">Short description:</span> {short_description} </p> */}
                            
                        </div>
                    </div>

                    
                </div>

            </aside>

        </div>
    
    );
};

export default ViewDetails;