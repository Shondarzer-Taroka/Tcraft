import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Update = () => {

    // let {user}=useContext(AuthContext);
    let { id } = useParams()
    console.log(id);
    // let data=useLoaderData()
    // let {_id}=data
    // console.log(data);
    function update(e) {
        e.preventDefault()



        let form = e.target

        let image = form.image.value
        let item_name = form.item_name.value
        let subcategory_Name = form.subcategory_Name.value
        let price = form.price.value
        let rating = form.rating.value
        let customization = form.customization.value
        let processing_time = form.processing_time.value
        let stockStatus = form.stockStatus.value
        let short_description = form.short_description.value
        let craft = { short_description, image, item_name, subcategory_Name, price, rating, customization, processing_time, stockStatus }
        console.log(craft);

        // let form = e.target
        // let image = form.image.value
        // let item_name = form.item_name.value
        // let subcategory_Name = form.subcategory_Name.value
        // let price = form.price.value
        // let rating = form.rating.value
        // let customization = form.customization.value
        // let processing_time = form.processing_time.value
        // let stockStatus = form.stockStatus.value
        // let craft = { image, item_name, subcategory_Name, price, rating, customization, processing_time, stockStatus }
        // console.log(craft);


        fetch(`https://assignment-ten-server-orpin.vercel.app/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('successfully updated')
                form.reset()
                console.log(data);
            })


    }
    return (
        <div className="font-poppins ">

            <h1 className="text-center font-poppins font-bold text-4xl my-5">Update Data</h1>

            <form className="" onSubmit={update}>

                <section className="flex gap-3 flex-col">
                    <article className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1 ">
                            <span>Image:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="image" placeholder="Type your photo URL" id="" />
                        </div>
                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span>Item Name:</span>
                            <input className=" p-2 w-[100%] outline-none " type="text" name="item_name" placeholder="Type your Item Name" id="" />
                        </div>



                        <div className="flex items-center gap-3 justify-between border-[1px] border-black rounded-lg p-1" >
                            <span>Subcategory:</span>

                            <select className="w-full h-full" id="cars" name="subcategory_Name">
                                <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                <option value="Wooden Home Decor">Wooden Home Decor</option>
                                <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                                <option value="Jute Home Decor">Jute Home Decor</option>
                                <option value={"Jute Kitchenware & utensils"}>  Jute Kitchenware & utensils</option>
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
                            {/* <div className="flex items-center border-[1px] border-black rounded-lg w-full p-1">
                                <span>Stock-status:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stock status" id="" />
                            </div> */}
                            <div className="flex items-center border-[1px] gap-3 border-black rounded-lg p-1" >
                                <span>Stock-status:</span>

                                {/* <input className=" p-2 w-[100%] outline-none " type="text" name="stockStatus" placeholder="Type your stockStatus" id="" /> */}

                                <select className="w-full h-full" id="stockStatus" name="stockStatus">
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>

                                </select>

                            </div>
                            <div className="flex items-center border-[1px] border-black rounded-lg p-1 " >
                                <span>Processing time:</span>
                                <input className=" p-2 w-[100%] outline-none " type="text" name="processing_time" placeholder="Type your Processing time" id="" />
                            </div>
                        </div>


                        <div className="flex items-center border-[1px] border-black rounded-lg p-1" >
                            <span> short description:</span>
                            <textarea className="w-full" name="short_description" id="" cols="30" rows="5"></textarea>

                        </div>

                    </article>
                </section>
                <input type="submit" value={'Update'} className="btn btn-primary w-full mt-3" name="" id="" />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Update;