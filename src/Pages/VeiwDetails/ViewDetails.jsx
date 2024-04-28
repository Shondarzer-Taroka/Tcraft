import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    let loadedData = useLoaderData()
    let { customization, item_name, price, processing_time, rating, stockStatus, subcategory_Name, image, short_description,user_name,email} = loadedData
    console.log(loadedData);

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
        <div>


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
                            <input className=" p-2 w-[100%] outline-none " type="text" name="rating" placeholder="Type your stock status" value={rating} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Subcategory Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="subcategory_Name" placeholder="Type your Processing time" value={subcategory_Name} id="" />
                        </div>
                    </div>
               
                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>Stock-status:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stock status" id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Customization:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="customization" placeholder="Type your Processing time" value={customization} id="" />
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>Stock-status:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stock status" value={stockStatus} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Processing time:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" value={processing_time} placeholder="Type your Processing time" id="" />
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 w-full">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                            <span>User Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="user_name" placeholder="Type your stock status" value={user_name} id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                            <span>Email: </span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" placeholder="Type your Processing time" value={email} id="" />
                        </div>
                    </div>

                    <div className="mt-7">
                        <p className="text-wrap"> <span className="text-lg font-semibold">Short description:</span> {short_description} </p>
                    </div>

                    
                </div>

            </aside>

        </div>
    );
};

export default ViewDetails;