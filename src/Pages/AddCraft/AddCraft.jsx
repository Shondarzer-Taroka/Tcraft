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
        let craft={email,user_name,image,item_name,subcategory_Name,price,rating,customization,processing_time,stockStatus}
        console.log(craft);

        fetch('http://localhost:4545/crafts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(craft)
        })
        .then(res=> res.json())
        .then(data=>{
            toast.success('successfully added')
            console.log(data);
        })


    }
    return (
        <div>

            <form className="card-body" onSubmit={add}>
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
                <input  className="btn btn-primary" type="submit" value={'Add'}/>
            </form>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddCraft;