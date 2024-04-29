import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCraft = () => {
    let {user}=useContext(AuthContext)
    function add(e) {
        e.preventDefault()
        let form=e.target 
        let email=form.email.value
        let user_name= form.name.value
        let image=form.image.value 
        let item_name=form.item_name.value 
        let subcategory_Name=form.subcategory_Name.value 
        let price=form.price.value 
        let rating=form.rating.value 
        let customization=form.customization.value
        let processing_time=form.processing_time.value 
        let stockStatus=form.stockStatus.value
        let short_description=form.short_description.value
        let craft={short_description,email,user_name,image,item_name,subcategory_Name,price,rating,customization,processing_time,stockStatus}
        console.log(craft);

        fetch('https://assignment-ten-server-orpin.vercel.app/crafts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(craft)
        })
        .then(res=> res.json())
        .then(data=>{
            toast.success('successfully added')
            // form.reset()
            console.log(data);
        })
        .catch(er=>{
            toast.error('Failed to add')
        })


    }
    return (
        <div className="font-poppins">

            {/* <form className="card-body" onSubmit={add}>
                <aside className="flex flex-col gap-2">

                    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Email: </span>
                            </label>
                            <input type="email" value={user?.email} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                           
                        </div>

                        <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" value={user?.displayName} name="name" placeholder="User Name" className="input input-bordered" />
                            </div>
                          
                        </div>


                        <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                           
                        </div>

                    </article>


                    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  
                    <div className="form-control">
                        <div className="flex">
                        <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered" />
                        </div>
                           
                        </div>


                        <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input type="text" name="subcategory_Name" placeholder="Subcategory Name" className="input input-bordered" />
                            </div>
                          
                        </div>
                        <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                           
                        </div>
                    </article>

                    <article className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Rating:</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                            </div>
                           
                        </div>
                    <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Customization:</span>
                            </label>
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered" />
                            </div>
                           
                        </div>

                        
                    </article>

                    <article className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Processing Time:</span>
                            </label>
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered" />
                            </div>
                           
                        </div> 
                    <div className="form-control">
                            <div className="flex">
                            <label className="label">
                                <span className="label-text">Stock Status:</span>
                            </label>
                            <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered" />
                            </div>
                           
                        </div> 
                    </article>
                </aside>

                
                <aside> 
                    <span> short_description </span>
                    <textarea className="w-full border-2 border-black" placeholder="write short description" name="short_description" id="" cols="30" rows="10"></textarea>
                </aside>
                  
                <input  className="btn btn-primary" type="submit" value={'Add'}/>
            </form> */}


<form className="" onSubmit={add}>

<section className="flex gap-3 flex-col">
<article className="grid md:grid-cols-3 gap-4">
    <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
        <span>Email:</span>
        <input className=" p-2 w-[100%] outline-none" value={user.email} type="email" name="email" placeholder="Type your Email" id="" />
    </div>
    <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
        <span>User Name:</span>
        <input className=" p-2 w-[100%] outline-none " value={user.displayName} type="text" name="user_name" placeholder="Type your User Name" id="" />
    </div>
    <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
        <span>Subcategory:</span>
        {/* <input className=" p-2 w-[100%] outline-none " type="text" name="subcategory_Name" placeholder="Type your Subcategory" id="" /> */}
        <select className="w-full h-full" id="cars" name="subcategory_Name">
      <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
      <option value="Wooden Home Decor">Wooden Home Decor</option>
      <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
      <option value="Jute Home Decor">Jute Home Decor</option>
      <option value={ "Jute Kitchenware & utensils"}>  Jute Kitchenware & utensils</option>
      <option value={"Jute and wooden jewellery"}>Jute and wooden jewellery </option>
  </select>
    </div>

</article>


<article className="grid md:grid-cols-3 gap-4">

    <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
        <span>Price:</span>
        <input className=" p-2 w-[100%] outline-none " type="text" name="price" placeholder="Type your price" id="" />
    </div>
    <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
        <span>Rating:</span>
        <input className=" p-2 w-[100%] outline-none " type="text" name="rating" placeholder="Type your rating" id="" />
    </div>
    <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
        <span>customization:</span>
       
        {/* <input className=" p-2 w-[100%] outline-none " type="text" name="customization" placeholder="Type your customization" id="" /> */}
       
        <select className="w-full h-full" id="customization" name="customization">
      <option value="Yes">Yes</option>
      <option value="No">No</option>

  </select>
    
    </div>

</article>
<article className="grid grid-cols-1 md:grid-cols-2 gap-4">


    <div className="grid gap-4 ">
        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
            <span>Stock-status:</span>
            <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stock status" id="" />
        </div>
        <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
            <span>Processing time:</span>
            <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" placeholder="Type your Processing time" id="" />
        </div>

        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
        <span>Image:</span>
        <input className=" p-2 w-[100%] outline-none " type="text" name="image" placeholder="Type your photo URL" id="" />
    </div>
    <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
        <span>Item Name:</span>
        <input className=" p-2 w-[100%] outline-none " type="text" name="item_name" placeholder="Type your Item Name" id="" />
    </div>
    </div>
    {/* <div className="grid gap-4 ">


    </div> */}


    <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
        {/* <span> short description:</span> */}
        <textarea className="w-full h-full" placeholder="write here short description..." name="short_description" id="" cols="30" rows="5"></textarea>
    </div>

</article>
</section>
<input type="submit" value={'Add'} className="btn btn-primary w-full mt-3" name="" id="" />
</form>

    <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddCraft;