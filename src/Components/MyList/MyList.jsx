// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { TiTick } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa6";


const MyList = () => {
    let { user } = useContext(AuthContext) || {}
    let [item, setItem] = useState([])
    let [toggle, setToggle] = useState(false)
    let [dataLoading,setDataLoading]=useState(true)

    useEffect(()=>{
        document.querySelector('html').setAttribute('data-theme','light')
     },[])

    useEffect(() => {
        setDataLoading(true)
        fetch(`https://assignment-ten-server-orpin.vercel.app/crafts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setDataLoading(false)
                // console.log(data);
            })
    }, [user, toggle])


    function handleDelete(id) {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-ten-server-orpin.vercel.app/crafts/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {

                            console.log(data);
                            if (data.deletedCount > 0) {
                                setToggle(!toggle)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            })


    }


     function handleSortNo() {
        setDataLoading(true)
        fetch(`https://assignment-ten-server-orpin.vercel.app/myfilterno/${user?.email}`)
        .then(res=> res.json())
        .then(data=>{
            // console.log(data);
            setItem(data)
            setDataLoading(false)
        })


        
     }


     function handleSortYes() {
        setDataLoading(true)
        fetch(`https://assignment-ten-server-orpin.vercel.app/myfilteryes/${user?.email}`)
        .then(res=> res.json())
        .then(data=>{
            setItem(data)
            setDataLoading(false)
            // console.log(data);
        })
        
     }




     
    function getRating(num) {
        let n= parseInt(num)
         console.log(n);
         let t=n>5 ? n=5 :n
         let ratingArray = []
         for (let i = 0; i < t; i++) {
             ratingArray.push(i)
         }
         console.log(t);
         return ratingArray
         //   ratingArray =[]
     }

    return (
        <div>


            <div className="flex justify-center items-center my-4 mb-24">            
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={handleSortNo}><a>sort bt No</a></li>
                    <li onClick={handleSortYes}><a>sort by yes</a></li>
                </ul>
            </div> 
            </div>

            <>{dataLoading ? <div className="flex items-center justify-center"><span className="loading loading-dots loading-lg"></span> </div> :

            <div className=" px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                {
                    item.map((value, index) => {

                        return <aside key={value._id} className="border-[1px] border-black">

                            <div id="img" className="p-4 md:h-[300px] ">
                                <img className="w-full h-full object-cover" src={value?.image} alt="" />
                            </div>

                            <div id="content" className="p-4">
                                <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> <span className="font-semibold">Item Name: </span> {value?.item_name} </p>
                                <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />  <span className="font-semibold">price:</span> {value?.price} </p>
                                <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> <span className="font-semibold">customization:</span>  {value?.customization} </p>
                                <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" />  <span className="font-semibold">stock status:</span>  {value?.stockStatus} </p>
                                <p className="flex items-center gap-1"> <TiTick className="text-[hsl(120,85%,69%)]" /> <p className=' pb-2 flex items-center gap-1 font-semibold'> <span className="font-semibold"> Rating:</span>{getRating(value.rating).map(rat => <span key={77 + rat} className='text-yellow-400'> <FaStar></FaStar> </span>)} </p></p>

                                <div id="btn-cont" className="flex gap-1">
                                    <Link to={`/update/${value._id}`}><button className="btn btn-accent">Update</button> </Link>
                                    <button onClick={() => handleDelete(value._id)} className="btn btn-secondary">Delete</button>
                                </div>
                            </div>

                        </aside>



                    })
                }
            </div>
             }
             </>
        </div>
    );
};

export default MyList;